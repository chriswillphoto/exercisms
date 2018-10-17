using System;
using System.Collections.Generic;
using System.Linq;

public class Robot
{
    private string RobotName;
    public static string[] UsedNames = {};

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
        var NewName = NameConstructor();

        while( UsedNames.Contains(NewName) )
        {
            NewName = NameConstructor();
        }

        RobotName = NewName;

    }

    public string NameConstructor()
    {
        char[] alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
        var NewRobotName = new List<string>();
        var random = new Random();
        int RandomNum;
        int RandomIndex;
        for (int i = 0; i < 5; i++)
        {   
            if(i < 2)
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