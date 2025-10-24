const prompt= require('prompt-sync')();

let c = prompt("Enter a Currency: ")

switch(c)
{
    case "USD":
    case "Dollar":
     console.log("$");
     break;
    case "EUR":
    case "Pound":
    console.log("£")
    break;
    case "JPY":
    case "Yen":
        console.log("¥");
        break;
    case "INR":
    case "Rupee":
        console.log("₹")
        
}