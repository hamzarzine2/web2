const express = require('express');

const {getAllFilms,getFilmID,addFilm,deleteFilm,updateFilm} = require('../models/films');
const { authorize } = require('../utils/auths');

const router = express.Router();



router.get('/', (req, res) => {
  const filterDuration = req?.query?.['minimum-duration'] ?? 0;
  if (filterDuration < 0) return res.sendStatus(404);

  const filmJson=getAllFilms(filterDuration);

  return res.json(filmJson);
});

router.get('/:id', (req, res) => {  
  const idValue=parseInt(req.params.id,10);
  const filmById= getFilmID(idValue); 
  if (!filmById) return res.sendStatus(404);
  return res.json(filmById);
});

router.post('/',authorize, (req, res) => {
  const titre = req?.body?.title;
  const duree = req?.body?.duration;
  const budget = req?.body?.budget;
  const lien = req?.body?.link;

  const filmAdd=addFilm(titre,duree,budget,lien);

  if (!filmAdd) return res.sendStatus(400);

  

  return res.json(filmAdd);
});

router.delete('/:id',authorize, (req, res) => {
  const idValue=parseInt(req.params.id,10)

  const filmSupp = deleteFilm(idValue);
  if (!filmSupp) return res.sendStatus(404);

  
  return res.json(filmSupp);
});

router.patch('/:id',authorize, (req, res) => {
  const titre = req?.body?.title;
  const duree = req?.body?.duration;
  const budget = req?.body?.budget;
  const lien = req?.body?.link;
  console.log("bob l'eponge")
  const idValue=parseInt(req.params.id,10)

  const filmUptad=updateFilm(idValue,req.body)
  if (
    (!titre && !duree && !budget && !lien) ||
    titre?.length === 0 ||
    duree?.length === 0 ||
    budget?.length === 0 ||
    lien?.length === 0
  )
    return res.sendStatus(400);
  console.log(filmUptad)


  return res.json(filmUptad);
});

module.exports = router;
