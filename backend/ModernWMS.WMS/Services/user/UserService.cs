/*
 * date：2022-12-20
 * developer：NoNo
 */
using Mapster;
using Microsoft.EntityFrameworkCore;
using ModernWMS.Core.DBContext;
using ModernWMS.Core.Services;
using ModernWMS.WMS.Entities.Models;
using ModernWMS.WMS.Entities.ViewModels;
using ModernWMS.WMS.IServices;
using ModernWMS.Core.Models;
using Microsoft.Extensions.Localization;
using ModernWMS.Core.Utility;
using System.Text;
using ModernWMS.Core.JWT;

namespace ModernWMS.WMS.Services
{
    /// <summary>
    ///  User Service
    /// </summary>
    public class UserService : BaseService<userEntity>, IUserService
    {
        #region Args
        /// <summary>
        /// The DBContext
        /// </summary>
        private readonly SqlDBContext _dBContext;

        /// <summary>
        /// Localizer Service
        /// </summary>
        private readonly IStringLocalizer<ModernWMS.Core.MultiLanguage> _stringLocalizer;
        #endregion

        #region constructor
        /// <summary>
        ///User  constructor
        /// </summary>
        /// <param name="dBContext">The DBContext</param>
        /// <param name="stringLocalizer">Localizer</param>
        public UserService(
            SqlDBContext dBContext
          , IStringLocalizer<ModernWMS.Core.MultiLanguage> stringLocalizer
            )
        {
            this._dBContext = dBContext;
            this._stringLocalizer = stringLocalizer;
        }
        #endregion

        #region Api
        /// <summary>
        /// Get all records
        /// </summary>
        /// <returns></returns>
        public async Task<List<UserViewModel>> GetAllAsync()
        {
            var DbSet = _dBContext.GetDbSet<userEntity>();
            var data = await DbSet.AsNoTracking().ToListAsync();
            return data.Adapt<List<UserViewModel>>();
        }

        /// <summary>
        /// Get a record by id
        /// </summary>
        /// <returns></returns>
        public async Task<UserViewModel> GetAsync(int id)
        {
            var DbSet = _dBContext.GetDbSet<userEntity>();
            var entity = await DbSet.AsNoTracking().FirstOrDefaultAsync(t => t.id.Equals(id));
            if (entity == null)
            {
                return null;
            }
            return entity.Adapt<UserViewModel>();
        }
        /// <summary>
        /// add a new record
        /// </summary>
        /// <param name="viewModel">viewmodel</param>
        /// <returns></returns>
        public async Task<(int id, string msg)> AddAsync(UserViewModel viewModel)
        {
            var DbSet = _dBContext.GetDbSet<userEntity>();
            if (await DbSet.AnyAsync(t => t.user_num == viewModel.user_num))
            {
                string.Format(_stringLocalizer["exists_entity"], _stringLocalizer["user_num"], viewModel.user_num);
            }
            var entity = viewModel.Adapt<userEntity>();
            entity.id = 0;
            entity.auth_string = Md5Helper.Md5Encrypt32("pwd123456");
            entity.create_time = DateTime.Now;
            entity.last_update_time = DateTime.Now;
            await DbSet.AddAsync(entity);
            await _dBContext.SaveChangesAsync();
            if (entity.id > 0)
            {
                return (entity.id, _stringLocalizer["save_success"]);
            }
            else
            {
                return (0, _stringLocalizer["save_failed"]);
            }
        }
        /// <summary>
        /// update a record
        /// </summary>
        /// <param name="viewModel">args</param>
        /// <returns></returns>
        public async Task<(bool flag, string msg)> UpdateAsync(UserViewModel viewModel)
        {
            var DbSet = _dBContext.GetDbSet<userEntity>();
            if (await DbSet.AnyAsync(t => t.id != viewModel.id && t.user_num == viewModel.user_num))
            {
                string.Format(_stringLocalizer["exists_entity"], _stringLocalizer["user_num"], viewModel.user_num);
            }
            var entity = await DbSet.FirstOrDefaultAsync(t => t.id.Equals(viewModel.id));
            if (entity == null)
            {
                return (false, _stringLocalizer["not_exists_entity"]);
            }
            entity.id = viewModel.id;
            entity.user_num = viewModel.user_num;
            entity.user_name = viewModel.user_name;
            entity.contact_tel = viewModel.contact_tel;
            entity.user_role = viewModel.user_role;
            entity.sex = viewModel.sex;
            entity.is_valid = viewModel.is_valid;
            entity.last_update_time = DateTime.Now;
            var qty = await _dBContext.SaveChangesAsync();
            if (qty > 0)
            {
                return (true, _stringLocalizer["save_success"]);
            }
            else
            {
                return (false, _stringLocalizer["save_failed"]);
            }
        }
        /// <summary>
        /// delete a record
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        public async Task<(bool flag, string msg)> DeleteAsync(int id)
        {
            var qty = await _dBContext.GetDbSet<userEntity>().Where(t => t.id.Equals(id)).ExecuteDeleteAsync();
            if (qty > 0)
            {
                return (true, _stringLocalizer["delete_success"]);
            }
            else
            {
                return (false, _stringLocalizer["delete_failed"]);
            }
        }
        /// <summary>
        /// import users by excel
        /// </summary>
        /// <param name="datas">excel datas</param>
        /// <returns></returns>
        public async Task<(bool flag,string msg)>ExcelAsync(List<UserExcelImportViewModel> datas)
        {
            StringBuilder sb = new StringBuilder();
            var DbSet = _dBContext.GetDbSet<userEntity>();
            var user_num_repeat_excel =  datas.GroupBy(t => t.user_num).Select(t=>new { user_num= t.Key,cnt = t.Count()}).Where(t=>t.cnt>1).ToList();
            foreach(var repeat in user_num_repeat_excel)
            {
                sb.AppendLine(string.Format(_stringLocalizer["exists_entity"], _stringLocalizer["user_num"], repeat.user_num));
            }
            if (user_num_repeat_excel.Count > 1)
            {
                return (false,sb.ToString());
            }

            var user_num_repeat_exists =await DbSet.Where(t => datas.Select(t => t.user_num).ToList().Contains(t.user_num)).Select(t=>t.user_num).ToListAsync();
            foreach (var repeat in user_num_repeat_exists)
            {
                sb.AppendLine(string.Format(_stringLocalizer["exists_entity"], _stringLocalizer["user_num"], repeat));
            }
            if (user_num_repeat_exists.Count > 1)
            {
                return (false, sb.ToString());
            }

            var entities = datas.Adapt<List<userEntity>>();
            entities.ForEach(t => {
                t.auth_string = Md5Helper.Md5Encrypt32("pwd123456");
                t.create_time = DateTime.Now;
                t.last_update_time= DateTime.Now;
                t.is_valid = true;
                });
            await DbSet.AddRangeAsync(entities);
            var res = await _dBContext.SaveChangesAsync();
            if (res > 0)
            {
                return (true, _stringLocalizer["save_success"]);
            }
            return (false, _stringLocalizer["delete_failed"]);
        }

        /// <summary>
        /// reset password
        /// </summary>
        /// <param name="viewModel">viewmodel</param>
        /// <returns></returns>
        public async Task<(bool,string)> ResetPwd(BatchOperationViewModel viewModel)
        {
            var DBSet = _dBContext.GetDbSet<userEntity>();
            var entities =await DBSet.Where(t => viewModel.id_list.Contains(t.id)).ToListAsync();
            entities.ForEach(t => t.auth_string = Md5Helper.Md5Encrypt32("pwd123456"));
            var res = await  _dBContext.SaveChangesAsync();
            if (res > 0)
            {
                return (true, _stringLocalizer["operation_success"]);
            }
            return (false,_stringLocalizer["operation_failed"]);
        }

        /// <summary>
        /// change password
        /// </summary>
        /// <param name="viewModel">viewmodel</param>
        /// <returns></returns>
        public async Task<(bool flag,string msg)> ChangePwd(UserChangePwdViewModel viewModel)
        {
            var DBSet = _dBContext.GetDbSet<userEntity>();
            var entity =await DBSet.FirstOrDefaultAsync(t => t.id.Equals(viewModel.id));
            if(entity == null)
            {
                return (false, _stringLocalizer["not_exists_entity"]);
            }
            if (!entity.auth_string.Equals(viewModel.old_password)){
                return(false, _stringLocalizer["old_password"] + _stringLocalizer["is_incorrect"]);
            }
            entity.auth_string = viewModel.new_password;
            await _dBContext.SaveChangesAsync();
            return (true, _stringLocalizer["save_success"]);
        } 
        #endregion
    }
}
