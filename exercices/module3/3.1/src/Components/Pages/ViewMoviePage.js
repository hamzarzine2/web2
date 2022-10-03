import clearPage from "../render/render";
import { film ,filmAsLine} from "./movies";

const main=document.querySelector("main")


const renderViewPage =() => {
    clearPage();
    renderTable()
}

function renderTable(){
    const divTable=document.createElement("div");
    const ligne=filmAsLine(film);
    const table=createTable(ligne);
    main.appendChild(divTable);
    divTable.innerHTML+=table;
}
function createTable(ligne){
  const tableAdd=`
  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">Duration (min) </th>
      <th scope="col">Budget (million) </th>
    </tr>
  </thead>
  <tbody>
  ${ligne} 
  </tbody>
  </table>
    `

    return tableAdd;
}







// eslint-disable-next-line import/prefer-default-export
export default renderViewPage