namespace NumberStringConverter.BusinessLogic.Services.Interface
{
    public interface IConverterRepository
    {
        Task<string> ConvertNumberToWord(decimal amount);
    }
}
