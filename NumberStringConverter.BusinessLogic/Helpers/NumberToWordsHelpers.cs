namespace NumberStringConverter.BusinessLogic.Helpers
{
    public static class NumberToWordsHelpers
    {
        public static string NumberToWords(string doubleNumber, string mainAmountType, string decimalAmountType)
        {
            int beforeFloatingPoint = Convert.ToInt32(Convert.ToString(doubleNumber).Split('.')[0]);
            string beforeFloatingPointWord = string.Format("{0} {1}", NumberToWords(beforeFloatingPoint), (beforeFloatingPoint > 1 ? mainAmountType : mainAmountType.TrimEnd(mainAmountType.Last())));
            int afterFloatingPoint = Convert.ToInt32(Convert.ToString(doubleNumber).Contains('.') ? Convert.ToString(doubleNumber).Split('.')[1] : "0");
            string afterFloatingPointWord = string.Format("{0} {1}.", SmallNumberToWord(afterFloatingPoint, ""), decimalAmountType);
            if (afterFloatingPoint > 0)
            {
                return string.Format("{0} and {1}", beforeFloatingPointWord, afterFloatingPointWord);
            }
            else
            {
                return string.Format("{0}", beforeFloatingPointWord);
            }
        }

        private static string NumberToWords(int number)
        {
            if (number == 0)
                return "zero";

            if (number < 0)
                return "minus " + NumberToWords(Math.Abs(number));

            var words = "";

            if (number / 1000000000 > 0)
            {
                words += NumberToWords(number / 1000000000) + " billion ";
                number %= 1000000000;
            }

            if (number / 1000000 > 0)
            {
                words += NumberToWords(number / 1000000) + " million ";
                number %= 1000000;
            }

            if (number / 1000 > 0)
            {
                words += NumberToWords(number / 1000) + " thousand ";
                number %= 1000;
            }

            if (number / 100 > 0)
            {
                words += NumberToWords(number / 100) + " hundred ";
                number %= 100;
            }

            words = SmallNumberToWord(number, words);

            return words;
        }

        private static string SmallNumberToWord(int number, string words)
        {
            if (number <= 0) return words;
            if (words != "")
                words += "";

            var unitsMap = new[] { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
            var tensMap = new[] { "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };

            if (number < 20)
                words += unitsMap[number];
            else
            {
                words += tensMap[number / 10];
                if ((number % 10) > 0)
                    words += " " + unitsMap[number % 10];
            }
            return words;
        }
    }
}

