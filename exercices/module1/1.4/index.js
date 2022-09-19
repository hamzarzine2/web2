const red = document.getElementById("red");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
let div = document.querySelectorAll("div");
let i = 0;

changeColor();
setTimeout(changeColor, 10000);

function changeColor() {
  changeColorRed();
  setTimeout(changeColorRedOrange, 2000);
  setTimeout(changeColorOrangeGreen, 4000);
  setTimeout(changeColorGreenOrange, 6000);
  setTimeout(changeColorOrangeRed, 8000);
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
