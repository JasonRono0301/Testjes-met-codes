
var check = document.getElementById("buttonCheck");


function check(){

    for (i = 0; i < random.length; i++) {
        if(checkWoord[i] == random[i]) {
            document.getElementById("letter_" + (i+1)).innerHTML = random[i];
            document.getElementById("letter_" + (i+1)).style.backgroundColor = "green";
            raadWoord[i] = "*";
        } else if (raadWoord.indexOf(checkWoord[i])>-1) {
            document.getElementById("letter_" + (i+1)).innerHTML = checkWoord[i];
            document.getElementById("letter_" + (i+1)).style.backgroundColor = "yellow";
        } else {
            document.getElementById("letter_" + (i+1)).innerHTML = checkWoord[i];
            document.getElementById("letter_" + (i+1)).style.backgroundColor = "red";
        }
    }

}