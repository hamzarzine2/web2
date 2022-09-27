import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import imageFilm1 from './img/film1.jpg';
import imageFilm2 from './img/film2.jpg';

const main=document.querySelector('main');

renderImage(imageFilm1);
renderImage(imageFilm2);


function renderImage (imageUrl) {
    const divisionImage=document.createElement('div');
    const image=document.createElement('img');
    image.src=imageUrl;
    main.appendChild(divisionImage);
    divisionImage.appendChild(image);
}