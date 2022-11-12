import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import navbar from './Components/Navbar/Navbar';
import router from './Components/Router/Router';
import renderHomePage from './Components/Pages/HomePage'

navbar();
router();
renderHomePage();
