const express = require('express');

const router = express.Router();

const path = require('node:path');
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


router.get('/', (req, res) => {
  const filterDuration = req?.query?.['minimum-duration'] ?? 0;
  if (filterDuration < 0) return res.sendStatus(404);

  let filmJson= parse(jsonDbPath,film)
  
  filmJson=filmJson.filter((e) => e.duration > filterDuration);
  return res.json(filmJson);
});

router.get('/:id', (req, res) => {  
  const idValue=parseInt(req.params.id,10)  
  const filmJson= parse(jsonDbPath,film)
  if (idValue < 0 || idValue > filmJson.length) return res.sendStatus(404);
  const filmID = filmJson.findIndex((e) => e.id === idValue);
  return res.json(filmJson[filmID]);
});

router.post('/', (req, res) => {
  const title = req?.body?.title.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration.length !== 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget.length !== 0 ? req.body.budget : undefined;
  const link = req?.body?.link.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400);

  const filmJson= parse(jsonDbPath,film)

  const idAdd = filmJson.length + 1;

  const itemAdd = {
    id: idAdd,
    title,
    duration,
    budget,
    link,
  };

  filmJson.push(itemAdd);
  
  serialize(jsonDbPath,filmJson)

  return res.json(itemAdd);
});

router.delete('/:id', (req, res) => {
  const idValue=parseInt(req.params.id,10)

  const filmJson = parse(jsonDbPath,film)
  if (idValue< 0 || idValue > filmJson.length) return res.sendStatus(404);

  const filmID = filmJson.findIndex((e) => e.id === idValue);
  const filmSupp = filmJson[filmID]; 

  filmJson.splice(filmID, 1);
  serialize(jsonDbPath,filmJson)
  return res.json(filmSupp);
});

router.patch('/:id', (req, res) => {
  const titre = req?.body?.title;
  const duree = req?.body?.duration;
  const budget = req?.body?.budget;
  const lien = req?.body?.link;

  const idValue=parseInt(req.params.id,10)
  const filmJson = parse(jsonDbPath,film)


  if (idValue < 0 || idValue > filmJson.length) return res.sendStatus(404);

  if (
    (!titre && !duree && !budget && !lien) ||
    titre?.length === 0 ||
    duree?.length === 0 ||
    budget?.length === 0 ||
    lien?.length === 0
  )
    return res.sendStatus(400);
  const filmID = filmJson.findIndex((e) => e.id === idValue);

  const filmUptad = { ...filmJson[filmID], ...req.body };

  filmJson[filmID] = filmUptad;
  serialize(jsonDbPath,filmJson)

  return res.json(filmUptad);
});

module.exports = router;
