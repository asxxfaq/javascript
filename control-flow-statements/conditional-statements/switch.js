const prompt=require("prompt-sync")();
let day = prompt("enter the day: ");

switch (day) {
    case "monday": console.log("Start of The Work week");
        break;

    case "friday": console.log("End of the work week");
        break;

    case "Sunday": console.log("Weekend!!");
        break;

    default:console.log("Regular day");
        break;
}