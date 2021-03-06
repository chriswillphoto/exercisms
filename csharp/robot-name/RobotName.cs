using System;
using System.Collections.Generic;
using System.Linq;

public class Robot
{
  private string RobotName;
  private NameConstructor nameConstructor = new NameConstructor();
  public static HashSet<string> UsedNames = new HashSet<string>();

  public Robot()
  {
    RobotName = nameConstructor.NewName();
  }
  public string Name
  {
    get
    {
      return RobotName;
    }
  }

  public void Reset()
  {
    var NewName = nameConstructor.NewName();

    while (UsedNames.Contains(NewName))
    {
      NewName = nameConstructor.NewName();
    }

    UsedNames.Add(NewName);
    RobotName = NewName;

  }


}

public class NameConstructor
    {
        public string NewName()
            {
            char[] alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
            var NewRobotName = new List<string>();
            var random = new Random();
            int RandomNum;
            int RandomIndex;
            for (int i = 0; i < 5; i++)
            {
                if (i < 2)
                {
                RandomIndex = random.Next(0, alpha.Count());
                NewRobotName.Add(alpha[RandomIndex].ToString());
                }
                else
                {
                RandomNum = random.Next(0, 10);
                NewRobotName.Add(RandomNum.ToString());
                }
            }
            var NewRobotNameJoined = string.Join("", NewRobotName);
            return NewRobotNameJoined;
            }
    }