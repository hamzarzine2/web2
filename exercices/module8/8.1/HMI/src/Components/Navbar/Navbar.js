/* eslint-disable no-unused-vars */
import { isAuthenticated,getUserSessionData } from "../utils/auths";

const header=document.querySelector("header")


function navbar( ){
  const div=document.createElement("div");
  div.id='navbarWrapper'
  header.appendChild(div)
  const user=getUserSessionData();

  const navbarNotLog=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" data-url ="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-url ="/viewMovie">viewMovie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-url ="/login">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-url ="/register">register</a>
          </li>
        </ul>
      </div>
    </nav>`

    const navbarAuthentified=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" data-url ="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-url ="/viewMovie">viewMovie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-url ="/addMovie">addMovie</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#" data-url ="/logout">logout</a>
        </li>
        
        </ul>
      </div>
    </nav>`

    const navbarRender=document.querySelector("#navbarWrapper");
    navbarRender.innerHTML= isAuthenticated() ? navbarAuthentified : navbarNotLog ;

    
    

}


export default navbar;