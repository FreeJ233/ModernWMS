/*
 * date：2022-12-20
 * developer：NoNo
 */
 using ModernWMS.Core.Services;
 using ModernWMS.WMS.Entities.Models;
 using ModernWMS.WMS.Entities.ViewModels;
using ModernWMS.Core.Models;

namespace ModernWMS.WMS.IServices
{
    /// <summary>
    /// Interface of UserService
    /// </summary>
     public interface IUserService : IBaseService<userEntity>
     {
         #region Api
         /// <summary>
         /// Get all datas
         /// </summary>
         /// <returns></returns>
         Task<List<UserViewModel>> GetAllAsync();
         /// <summary>
         /// Get a data by id
         /// </summary>
         /// <param name="id">primary key</param>
         /// <returns></returns>
         Task<UserViewModel> GetAsync(int id);
         /// <summary>
         /// add a new data
         /// </summary>
         /// <param name="viewModel">viewmodel</param>
         /// <returns></returns>
         Task<(int id, string msg)> AddAsync(UserViewModel viewModel);
         /// <summary>
         /// update a data
         /// </summary>
         /// <param name="viewModel">viewmodel</param>
         /// <returns></returns>
         Task<(bool flag, string msg)> UpdateAsync(UserViewModel viewModel);
 
         /// <summary>
         /// delete a data
         /// </summary>
         /// <param name="id">id</param>
         /// <returns></returns>
         Task<(bool flag, string msg)> DeleteAsync(int id);

        /// <summary>
        /// import users by excel
        /// </summary>
        /// <param name="datas">excel datas</param>
        /// <returns></returns>
        Task<(bool flag, string msg)> ExcelAsync(List<UserExcelImportViewModel> datas);

        /// <summary>
        /// reset password
        /// </summary>
        /// <param name="viewModel">viewmodel</param>
        /// <returns></returns>
        Task<(bool, string)> ResetPwd(BatchOperationViewModel viewModel);

        /// <summary>
        /// change password
        /// </summary>
        /// <param name="viewModel">viewmodel</param>
        /// <returns></returns>
        Task<(bool flag, string msg)> ChangePwd(UserChangePwdViewModel viewModel);
         #endregion
     }
 }
 