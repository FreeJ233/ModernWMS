/*
 * date：2022-12-22
 * developer：AMo
 */
 using Microsoft.AspNetCore.Mvc;
 using ModernWMS.Core.Controller;
 using ModernWMS.Core.Models;
 using ModernWMS.WMS.Entities.ViewModels;
 using ModernWMS.WMS.IServices;
 using Microsoft.Extensions.Localization;

namespace ModernWMS.WMS.Controllers
{
    /// <summary>
    /// asn controller
    /// </summary>
    [Route("asn")]
    [ApiController]
    [ApiExplorerSettings(GroupName = "wms")]
    public class AsnController : BaseController
    {
        #region Args

        /// <summary>
        /// asn Service
        /// </summary>
        private readonly IAsnService _asnService;

        /// <summary>
        /// Localizer Service
        /// </summary>
        private readonly IStringLocalizer<ModernWMS.Core.MultiLanguage> _stringLocalizer;
        #endregion

        #region constructor
        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="asnService">asn Service</param>
        /// <param name="stringLocalizer">Localizer</param>
        public AsnController(
            IAsnService asnService
          , IStringLocalizer<ModernWMS.Core.MultiLanguage> stringLocalizer
            )
        {
            this._asnService = asnService;
            this._stringLocalizer = stringLocalizer;
        }
        #endregion

        #region Api
        /// <summary>
        /// page search
        /// </summary>
        /// <param name="pageSearch">args</param>
        /// <returns></returns>
        [HttpPost("list")]
        public async Task<ResultModel<PageData<AsnViewModel>>> PageAsync(PageSearch pageSearch)
        {
            var (data, totals) = await _asnService.PageAsync(pageSearch, CurrentUser);

            return ResultModel<PageData<AsnViewModel>>.Success(new PageData<AsnViewModel>
            {
                Rows = data,
                Totals = totals
            });
        }

        /// <summary>
        /// get a record by id
        /// </summary>
        /// <returns>args</returns>
        [HttpGet]
        public async Task<ResultModel<AsnViewModel>> GetAsync(int id)
        {
            var data = await _asnService.GetAsync(id);
            if (data != null)
            {
                return ResultModel<AsnViewModel>.Success(data);
            }
            else
            {
                return ResultModel<AsnViewModel>.Error(_stringLocalizer["not_exists_entity"]);
            }
        }
        /// <summary>
        /// add a new record
        /// </summary>
        /// <param name="viewModel">args</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ResultModel<int>> AddAsync(AsnViewModel viewModel)
        {
            var (id, msg) = await _asnService.AddAsync(viewModel, CurrentUser);
            if (id > 0)
            {
                return ResultModel<int>.Success(id);
            }
            else
            {
                return ResultModel<int>.Error(msg);
            }
        }

        /// <summary>
        /// update a record
        /// </summary>
        /// <param name="viewModel">args</param>
        /// <returns></returns>
        [HttpPut]
        public async Task<ResultModel<bool>> UpdateAsync(AsnViewModel viewModel)
        {
            var (flag, msg) = await _asnService.UpdateAsync(viewModel);
            if (flag)
            {
                return ResultModel<bool>.Success(flag);
            }
            else
            {
                return ResultModel<bool>.Error(msg, 400, flag);
            }
        }

        /// <summary>
        /// delete a record
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        [HttpDelete]
        public async Task<ResultModel<string>> DeleteAsync(int id)
        {
            var (flag, msg) = await _asnService.DeleteAsync(id);
            if (flag)
            {
                return ResultModel<string>.Success(msg);
            }
            else
            {
                return ResultModel<string>.Error(msg);
            }
        }
        #endregion

    }
}
 