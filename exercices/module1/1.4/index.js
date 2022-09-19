const red= document.getElementById("red")
const orange=document.getElementById("orange")
const green=document.getElementById("green")
let div=document.querySelectorAll("div")

changeColor()

function changeColor () {   
    changeColorRed();
    setTimeout(changeColorOrange,2000);
    setTimeout(changeColorGreen,4000);
}

function changeColorRed () {
    red.style.backgroundColor='red'    
}

function changeColorOrange () {
    orange.style.backgroundColor='orange'    
}
 
function changeColorGreen () {
    green.style.backgroundColor='green'    
}