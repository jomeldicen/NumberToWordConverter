using NumberStringConverter.BusinessLogic.Helpers;
using NumberStringConverter.BusinessLogic.Services.Interface;

namespace NumberStringConverter.BusinessLogic.Services
{
    public class ConverterRepository : IConverterRepository
    {
        public async Task<string> ConvertNumberToWord(decimal amount)
        {
            return NumberToWordsHelpers.NumberToWords(amount.ToString(), "dollars", "cent"); 
        }
    }
}
