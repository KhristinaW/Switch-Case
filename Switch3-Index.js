const prompt= require('prompt-sync')();

const light = prompt("Enter the color of the traffic light: ")

switch(light)
{
    case "green":
        console.log("Go")
        break;
        case "yellow":
            console.log("Slow Down")
            //Fall through
            case "red":
            console.log("Stop")
            break;
}