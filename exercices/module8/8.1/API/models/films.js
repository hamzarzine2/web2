const path = require('node:path');
const escape = require('escape-html');

const {serialize,parse}=require ('../utils/json')

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const film = [
    {
      id: 1,
      title: 'one piece red',
      duration: 110,
      budget: 1222,
      link: 'https://e-vinci.github.io/web2/modules/4#c3',
    },
    {
      id: 2,
      title: 'avenger end games',
      duration: 223,
      budget: 323,
      link: 'https://e-vinci.github.io/web2/modules/4#c3',
    },
    {
      id: 3,
      title: 'jujutsu kaisen 0',
      duration: 332,
      budget: 103,
      link: 'https://e-vinci.github.io/web2/modules/4#c3',
    },
    {
      id: 4,
      title: 'dragon ball',
      duration: 32,
      budget: 832,
      link: 'https://e-vinci.github.io/web2/modules/4#c3',
    },
    {
      id: 5,
      title: 'one piece stampede',
      duration: 942,
      budget: 90,
      link: 'https://e-vinci.github.io/web2/modules/4#c3',
    },
  ];

function getAllFilms(duration) {
    
    const filterDuration=duration;
    
    let filmJson= parse(jsonDbPath,film)
  
    filmJson=filmJson.filter((e) => e.duration > filterDuration);

    return filmJson;

}

function getFilmID(id){
    const filmJson= parse(jsonDbPath,film)
    if (id < 0 || id > filmJson.length) return undefined;

    const filmID = filmJson.findIndex((e) => e.id === id);
    return filmID
}

function addFilm(title,duration,budget,link){
    if (!title || !duration || !budget || !link) return undefined;
  const filmJson= parse(jsonDbPath,film)
  const key=filmJson.length-1

  const idLast = filmJson.at(key).id;
  let idAdd=parseInt(idLast,10);
  idAdd+=1;

  const itemAdd = {
    id: idAdd,
    title: escape(title),
    duration: escape(duration),
    budget: escape(budget),
    link: escape(link),
  };

  filmJson.push(itemAdd);
  
  serialize(jsonDbPath,filmJson)
  return itemAdd;
}

function deleteFilm (idFilm) {
    const filmJson = parse(jsonDbPath,film)
    
    if (idFilm< 0 ) return undefined;
    const filmID = filmJson.findIndex((e) => e.id === idFilm);
    const filmSupp = filmJson[filmID]; 

    filmJson.splice(filmID, 1);
    serialize(jsonDbPath,filmJson)

    return filmSupp;
}

function updateFilm (id,propretyToUpdate){
    const filmJson = parse(jsonDbPath,film)
    if (id < 0) return undefined;

    

    const filmID = filmJson.findIndex((e) => e.id === id);

    const filmUptad = { ...filmJson[filmID], ...propretyToUpdate };

    filmJson[filmID] = filmUptad;
    serialize(jsonDbPath,filmJson)
    console.log("test")
    return filmUptad;
}


module.exports = {getAllFilms,getFilmID,addFilm , deleteFilm,updateFilm};