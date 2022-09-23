import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

let line;
let column;
let message;
const form=document.querySelector('form');
const main=document.querySelector('main');

form.addEventListener('submit',formValue);

function formValue (e){
    e.preventDefault();
    line=document.querySelector('#line').value;
    column=document.querySelector('#column').value;
    message=document.querySelector('#initialString').value;

    console.log(message)
    console.log(line)
    console.log(column)
}




function createArray (ligne,colon,string){
    let array=string[ligne][colon]
    return array;
}

function createHtmlTableAsString (){

}