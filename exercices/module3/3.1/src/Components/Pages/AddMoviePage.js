import clearPage from "../render/render"
import navigate from "../Router/Navigate";
import { addfilm } from "./movies";



const main =document.querySelector("main")
const renderAddMoviePage=()=>{
    clearPage();
    addForm();
    onSubmit();
}


function addForm(){
    const divAdd=document.createElement("div")
    const forms=`<form id="addForm">
    <label for="">titre : </label>
    <input type="text" id="title"> <br>
    <label for="">duration : </label>
    <input type="number" name="" id="duration"> <br>
    <label for="">budget :</label>
    <input type="number" name="" id="budget"><br>
    <label for="">link :</label>
    <input type="text" name="" id="link"><br>
    <input type="submit" value="submit">
  </form>
    `
    divAdd.innerHTML+=forms;
    main.appendChild(divAdd);
}


function onSubmit (){
    document.addEventListener('submit',(e)=>{    
        e.preventDefault( );    
        const forms = document.querySelector("#addForm")    
        addfilm(forms.querySelector("#title").value,
            forms.querySelector("#duration").value,
            forms.querySelector("#budget").value,
            forms.querySelector("#link").value)
        navigate("/viewMovie");
    })
}


export default renderAddMoviePage;