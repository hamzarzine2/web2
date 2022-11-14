import clearPage from '../utils/render';
import navigate from '../Router/Navigate';

const main = document.querySelector('main');
const renderAddMoviePage = () => {
  clearPage();
  addForm();
};

function addForm() {
  const divAdd = document.createElement('div');
  const forms = document.createElement('form');
  forms.innerHTML = `<form id="addForm">
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
    `;
  divAdd.appendChild(forms);
  main.appendChild(divAdd);
  forms.addEventListener('submit', addfilm);
}

async function addfilm(e) {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const budget = document.querySelector('#budget').value;
  const duration = document.querySelector('#duration').value;
  const link = document.querySelector('#link').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      title,
      budget,
      duration,
      link,
    }),
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    const response = await fetch('/api/films', options);

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    await response.json();

  } catch (error) {
    console.error(error);
  }

  navigate('/viewMovie');
}

export default renderAddMoviePage;
