const prompt= require('prompt-sync')();

const bmi = parseInt(prompt("Enter your BMI: "));

switch(true)
{
    case bmi < 18.5:
        console.log("Underweight");
        break;
    case bmi >= 18.5 && bmi <= 24.9:
        console.log("Average Weight");
        break;
        case bmi >= 25 && bmi <= 29.9:
        console.log("Overweight")
        break;
        case bmi >=30:
            console.log("Obese")
            break;
            default:
                console.log("Invalid Input");
}