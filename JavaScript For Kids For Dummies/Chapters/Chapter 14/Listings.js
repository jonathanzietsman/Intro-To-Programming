// Listing 14-1 : Page 236
var language = prompt("What language do you speak?");
if (language === "JavaScript") {
  alert("Great! Let's talk JavaScript!");
} else {
  alert("I don't know what you're saying.");
}

// Listing 14-2 : Page 238
var language = prompt("What language do you speak?");
if (language === "JavaScript") {
  alert("Great! Let's talk JavaScript!");
  var speaksJavaScript = true;
} else {
  alert("I don't know what you're saying.");
}
if (speaksJavaScript) {
  alert("It's great to meet you.");
}

// Listing 14-3 : Page 239
deliveryCity = "Anytown";
orderPrice = 20;
birthday = "no";


if ((deliveryCity === "Anytown") && (orderPrice > 10)) {
    var deliveryPrice = 0;
    } else {
    var deliveryPrice = 5;
  }

// Listing 14-4 : Page 239
deliveryCity = "Anytown";
orderPrice = 20;
birthday = "no";


if (((deliveryCity === "Anytown") && (orderPrice > 10)) ||  (birthday === "yes")) {

    var deliveryPrice = 0;
    } else {
    var deliveryPrice = 5;
    }

console.log(deliveryPrice);

