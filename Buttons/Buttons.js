//Buttons van 1 tot en met 30 in een loop gezet door middel van een div class te gebruiken.
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("container").innerHTML = text;

