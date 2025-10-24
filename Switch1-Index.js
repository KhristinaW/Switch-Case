const prompt= require('prompt-sync')();

const route = prompt("Enter a route: ")


switch(route)
{
    case "home":
     console.log("Redirecting to: home")
     break;

    case "about":
     console.log("Redirecting to: about")
     break;
     case "help":
     console.log("Redirecting to: help")
     break;
     default:
     console.log("Unknown Command");


}