import renderAddMoviePage from "../Pages/AddMoviePage";
import renderHomePage from "../Pages/HomePage";
import renderViewPage from "../Pages/ViewMoviePage";
import renderLoginPage from "../Pages/Login";
import renderRegisterPage from "../Pages/Register";
import logout from "../Logout/Logout";

const routes ={
    '/': renderHomePage,
    '/addMovie': renderAddMoviePage,
    '/viewMovie':renderViewPage,
    '/login':renderLoginPage,
    '/register':renderRegisterPage,
    '/logout':logout,
}

const Router = () => {
    onFrontendLoad();
    onNavBarClick();
    onHistoryChange();
  };
  
  function onNavBarClick() {
    const navbarWrapper = document.querySelector('#navbarWrapper');
  
    navbarWrapper.addEventListener('click', (e) => {
      e.preventDefault();
      const navBarItemClicked = e.target;
      const uri = navBarItemClicked?.dataset?.url;
      if (uri) {
        const componentToRender = routes[uri];
        if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);
  
        componentToRender();
        window.history.pushState({}, '', uri);
      }
    });
  }
  
  function onHistoryChange() {
    window.addEventListener('popstate', () => {
      const uri = window.location.pathname;
      const componentToRender = routes[uri];
      componentToRender();
    });
  }
  
  function onFrontendLoad() {
    window.addEventListener('load', () => {
      const uri = window.location.pathname;
      const componentToRender = routes[uri];
      if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);
  
      componentToRender();
    });
  }
  
  export default Router;
  