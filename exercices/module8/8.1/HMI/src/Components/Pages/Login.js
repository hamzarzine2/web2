import { setAuthenticatedUser, setUserCookies } from '../utils/auths';
import clearPage from '../utils/render';
import navigate from '../Router/Navigate';
import navbar from '../Navbar/Navbar';

const renderLoginPage = () => {
  clearPage();
  renderLoginFom();
};

function renderLoginFom() {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  const form = document.createElement('form');
  form.innerHTML += `<form action="">
    <label for="">username : </label>
    <input type="text" name="username" id="username">
    <label for="">password : </label>
    <input type="password" name="password" id="password">
    <input type="submit" value="submit">
    <input type="checkbox" name="remember me" id="remember">
    <label for="">remember me : </label>

    </form>`;
  div.appendChild(form);
  main.appendChild(div);
  form.addEventListener('submit', login);
}

async function login(e) {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const remember = document.querySelector('#remember').checked;

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
    const response = await fetch('/api/auths/login', options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const user = await response.json();
    if (remember) {
      setAuthenticatedUser(user);
    } else {
      setUserCookies(user);
    }
  } catch (error) {
    console.error(error);
  }

  navbar();
  navigate('/');
}

export default renderLoginPage;
