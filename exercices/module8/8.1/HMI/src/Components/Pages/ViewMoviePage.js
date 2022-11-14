import clearPage from '../utils/render';
// eslint-disable-next-line no-unused-vars
import navigate from '../Router/Navigate';
import { getUserSessionData, isAuthenticated } from '../utils/auths';

const main = document.querySelector('main');


const renderViewPage = async () => {
  try {
    clearPage();
    const response = await fetch('/api/films');
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const filmJson = await response.json();
    renderTable(filmJson);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

function renderTable(film) {
  const divTable = document.createElement('div');
  const ligne = filmAsLine(film);
  const table = createTable(ligne);
  main.appendChild(divTable);
  divTable.innerHTML += table;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of film) {
    const formDelete=document.getElementById(`deleteForm-${item.id}`)
    formDelete.addEventListener('submit', deleteId)
    const formUpdate=document.getElementById(`updateForm-${item.id}`)
    formUpdate.addEventListener('submit', updateRow)
  }

}
function createTable(ligne) {
  let tableAdd;
  if(isAuthenticated()){
  tableAdd = `
  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Link</th>
      <th scope="col">Duration (min) </th>
      <th scope="col">Budget (million) </th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  ${ligne} 
  </tbody>
  </table>
    `;
  }else {
    tableAdd = `
    <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Link</th>
        <th scope="col">Duration (min) </th>
        <th scope="col">Budget (million) </th>
      </tr>
    </thead>
    <tbody>
    ${ligne} 
    </tbody>
    </table>
      `;
  }
  

  return tableAdd;
}

function filmAsLine(film) {
  let ligne = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of film) {
  
    if(isAuthenticated()){  ligne += `<tr>
      <td contenteditable="true">${item.title}</td>
      <td contenteditable="true" ><a href=${item.link}> ${item.link}</a></td>
      <td contenteditable="true" >${item.duration}</td>
      <td contenteditable="true">${item.budget}</td>
      <td>
      <form action="" id="deleteForm-${item.id}">
      <input type="submit" value="delete" id="deleteButton" data-id=${item.id}>
      </form>
      <form action="" id="updateForm-${item.id}">
      <input type="submit" value="update" id="updateButton" data-id=${item.id}>
      </form>
      </td>
      </tr> 
      `  
    }else {
      ligne += `<tr>
      <td >${item.title}</td>
      <td ><a href=${item.link}> ${item.link}</a></td>
      <td  >${item.duration}</td>
      <td >${item.budget}</td>
      </tr> `

    }
   

  }
  return ligne;
}


async function deleteId(e){
  e.preventDefault();
  // eslint-disable-next-line no-unused-vars
  const idFilm=e.target.children[0].dataset.id;
  const user = getUserSessionData();
  try {
    const options={
      method: 'delete',
      headers:{
        authorization: user.token,
      }
    }
    const response= await fetch(`api/films/${idFilm}`,options);

    await response.json();
    renderViewPage();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

async function updateRow(e){
  e.preventDefault();

  const idUpdate=e.target.children[0].dataset.id;

  const {parentElement} = e.target.parentElement;
  const title = parentElement.children[0].innerHTML;
  // on a 2 children pour pouvoir aller recuper le lien dans le <a> sans prendre le a avec 
  const link =parentElement.children[1].children[0].innerHTML;

  
  const budget=parentElement.children[3].innerHTML;
  const duration=parentElement.children[2].innerHTML;
  const user=getUserSessionData();

  try {
    const options={
      method:'PATCH',
      body:JSON.stringify({
        title, 
        duration,
        budget,
        link
      }),
      headers:{
        'content-type' : 'application/json',
        authorization: user.token,

      },
    };
    const response=await fetch(`api/films/${idUpdate}`,options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    await response.json();
    renderViewPage();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

}

// eslint-disable-next-line import/prefer-default-export
export default renderViewPage;
