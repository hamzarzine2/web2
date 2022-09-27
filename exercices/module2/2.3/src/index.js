import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

let line;
let column;
let message;
const form=document.querySelector('form');
const main=document.querySelector('main');
const wrapper=document.createElement('div')
main.appendChild(wrapper);

form.addEventListener('submit',formValue);
form.addEventListener('submit',renderTable);

function formValue (e){
    e.preventDefault();
    line=document.querySelector('#line').value;
    column=document.querySelector('#column').value;
    message=document.querySelector('#initialString').value;
}


function renderTable (e){
    e.preventDefault();

    line=document.querySelector('#line').value;
    column=document.querySelector('#column').value;
    message=document.querySelector('#initialString').value;

    
    wrapper.className="table-responsive"
    const array=createArray(line,column,message);
    const ligneElement=ligneHtml(array,line,column)
    const table=createHtmlTableAsString(array,ligneElement);
    wrapper.innerHTML=table;
    
}

function createArray (ligne,colon,string){
    const array =new Array(ligne);
    for ( let a = 0; a<=ligne ; a+=1){
        array[a]=new Array(colon)
    }
    for (let i = 0 ; i<=ligne ; i+=1){
        for (let j = 0 ; j<=colon ; j+=1){
            array [i][j]=`${string}[${i}][${j}]`
        }
    }
    return array;
}


function ligneHtml (arrayElement,ligne,colum){
    let ligneElement="";
    for (let i = 0 ; i<=ligne ; i+=1){
        ligneElement+="<tr>"
        for (let j = 0 ; j<=colum ; j+=1){
            ligneElement+="<td>"
            ligneElement+=arrayElement[i][j];
            ligneElement+="</td>"
        }
        ligneElement+="</tr>"
        
    }
    return ligneElement;
}


function createHtmlTableAsString (arrayElement,ElementLigne){
    let elemet =`
    <table class="table table-success">
        <tbody>
        `
    elemet+=ElementLigne 
    elemet+=`
        </tbody>
    </table>
    `        
    return elemet;
}
