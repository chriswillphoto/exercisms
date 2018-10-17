using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Collections.Generic;

public static class Pangram
{
    public static bool IsPangram(string input)
    {
        List<string> LetterArray = new List<string>();

        foreach(char letter in input.ToLower())
        {
            if( Regex.IsMatch(letter.ToString(), "[a-z]") && !LetterArray.Contains(letter.ToString()) )
            {
                LetterArray.Add(letter.ToString());
            }
        }

        return LetterArray.Count() == 26 ? true : false;
    }
}
