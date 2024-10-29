var myNumber = prompt("Enter your favourite day of the week!");
var theResponse;

switch (myNumber){
    case "Monday":
        theResponse = "Ack!";
        break;
    case "Tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Halfway there!";
        break;
    case  "Thursday":
        theResponse = "It's the new Friday!";
        break;
    case "Friday":
        theResponse = "TGIF! Yeah";
        break;
    case "Saturday":
        theResponse = "What a day!";
        break;
    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I havent heard of that one!";
        break;
}
alert(theResponse);