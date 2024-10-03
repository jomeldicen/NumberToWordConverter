using Microsoft.AspNetCore.Mvc;
using NumberStringConverter.BusinessLogic.Services.Interface;
using NumberStringConverter.Models.DTO;

namespace NumberStringConverter.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConverterController : Controller
    {
        private readonly IConverterRepository _converterRepository;
        public ConverterController(IConverterRepository converterRepository)
        {
            _converterRepository = converterRepository;
        }

        [HttpGet(Name = "ConvertNumberToWord")]
        public async Task<ConvertedNumberDTO> ConvertNumberToWord(decimal amount)
        {
            try
            {
                // Initiliaze DTO object
                var converterdNum = new ConvertedNumberDTO();

                // Call repository method
                converterdNum.NumberInWords = await _converterRepository.ConvertNumberToWord(amount);

                return converterdNum;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
