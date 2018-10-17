using System;

public static class Leap
{
  public static bool IsLeapYear(int year)
  {
    if (year % 4 == 0)
    {
      if (DivisibleBy100(year))
      {
        if (DivisibleBy400(year))
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return true;
      }

    }
    else
    {
      return false;
    }
  }

  public static bool DivisibleBy100(int year)
  {
    if (year % 100 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  public static bool DivisibleBy400(int year)
  {
    if (year % 400 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}