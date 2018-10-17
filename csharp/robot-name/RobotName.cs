using System;
using System.Collections.Generic;
using System.Linq;

public class Robot
{
    private string RobotName;
    private string[] UsedNames;

    public Robot(){
        Reset();
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
        
    }

    public string NameConstructor()
    {
        char[] alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
        var NewRobotName = new List<string>();

        for (int i = 0; i < 5; i++)
        {   
            if(i < 2)
            {
                var random = new Random();
                var RandomIndex = random.Next(0, alpha.Count());
                NewRobotName.Add(alpha[RandomIndex].ToString());
            }
            else
            {
                var random = new Random();
                var RandomNum = random.Next(0, 10);
                NewRobotName.Add(RandomNum.ToString());
            }
        }

        
    }
}