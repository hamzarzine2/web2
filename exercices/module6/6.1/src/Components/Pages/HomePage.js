const main = document.querySelector('main');

const HomePage = async () => {
  try {
    const response = await fetch('https://animechan.vercel.app/api/random');

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const quoteJson = await response.json();

    renderTable(quoteJson.anime, quoteJson.character, quoteJson.quote);
  } catch (error) {
    console.error(error);
  }
};

const div = document.createElement('div');
const table = document.createElement('table');
table.className = 'table table-dark';
div.appendChild(table);
main.appendChild(div);

function renderTable(nom, perso, texte) {
  table.innerHTML = `
  <th>
  <td> ${nom} </td>
  <td> ${perso} </td>
  <td> ${texte} </td>
  </th>
  `;
}

export default HomePage;
