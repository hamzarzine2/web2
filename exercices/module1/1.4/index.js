const red = document.getElementById("red");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
let div = document.querySelectorAll("div");
let i = 0;

boucle();

function boucle (){
  setInterval(changeColor,4000)
}




changeColor();

function changeColor() {
  changeColorRed();
  setTimeout(changeColorRedOrange, 1000);
  setTimeout(changeColorOrangeGreen, 2000);
  setTimeout(changeColorGreenOrange, 3000);
  setTimeout(changeColorOrangeRed, 4000);
}

function changeColorRed() {
  red.style.backgroundColor = "red";
}

function changeColorRedOrange() {
  red.style.backgroundColor = "";
  orange.style.backgroundColor = "orange";
}

function changeColorOrangeGreen() {
  orange.style.backgroundColor = "";
  green.style.backgroundColor = "green";
}

function changeColorGreenOrange() {
  orange.style.backgroundColor = "orange";
  green.style.backgroundColor = "";
}

function changeColorOrangeRed() {
  orange.style.backgroundColor = "";
  red.style.backgroundColor = "red";
}
