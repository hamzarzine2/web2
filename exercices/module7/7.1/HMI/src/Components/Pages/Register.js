import navbar from '../Navbar/Navbar';
import navigate from '../Router/Navigate';
import { setAuthenticatedUser } from '../utils/auths';
import clearPage from '../utils/render';

const renderRegisterPage = () => {
  clearPage();
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  const form = document.createElement('form');
  form.innerHTML += `<form action="">
    <label for="">username : </label>
    <input type="text" name="username" id="username">
    <label for="">password : </label>
    <input type="password" name="password" id="password">
    <input type="submit" value="submit">
    </form>`;
  div.appendChild(form);
  main.appendChild(div);
  form.addEventListener('submit', registerEvent);
}

async function registerEvent(e) {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    };

    const response = await fetch('api/auths/register', options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const userConnected = await response.json();
    setAuthenticatedUser(userConnected);
    navbar();
    navigate('/');
  } catch (error) {
    console.error(error);
  }
}

export default renderRegisterPage;
