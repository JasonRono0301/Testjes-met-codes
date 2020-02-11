var button1 = document.getElementById("button1");

button1.onclick = function() {Groen()};

//Functie keuze1
function Groen(){
    var input = prompt("Welk getal wilt u invoeren?");
    var getal1 = 1;

    if(input == getal1){
        document.body.style.backgroundColor = "red";
        document.body.style.transition = "1s";
        document.getElementById("button2").style.display = "none";
    } else {
        document.body.style.backgroundColor = "green";
        document.body.style.transition = "1s";
    }
}