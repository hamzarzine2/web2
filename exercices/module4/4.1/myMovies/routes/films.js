const e = require('express');
var express = require('express');
var router = express.Router();

let film =[{
    id: 1,
    title: 'one piece red',
    duration: 110,
    budget: 1222,
    link: 'https://e-vinci.github.io/web2/modules/4#c3'
    },
    {
        id: 2,
        title: 'avenger end games',
        duration: 223,
        budget: 323,
        link: 'https://e-vinci.github.io/web2/modules/4#c3'
    },
    {
        id: 3,
        title: 'jujutsu kaisen 0',
        duration: 332,
        budget: 103,
        link: 'https://e-vinci.github.io/web2/modules/4#c3'
    },
    {
        id: 4,
        title: 'dragon ball',
        duration: 32,
        budget: 832,
        link: 'https://e-vinci.github.io/web2/modules/4#c3'
    },
    {
        id: 5,
        title: 'one piece stampede',
        duration: 942,
        budget: 90,
        link: 'https://e-vinci.github.io/web2/modules/4#c3'
    }
];

    router.get('/',(req,res,next) => {
        const filterDuration= req?.query?.['minimum-duration'];
        console.log(typeof filterDuration)
        if(typeof filterDuration === 'number'){
            res.json(film);
            return;
        }
        if(filterDuration < 0) return res.sendStatus(404);
        filmRender=[...film].filter(e => e.duration > filterDuration);
        res.json(filmRender);
});



    router.get('/:id',(req,res) => {
        if (req.params.id<0 || req.params.id>film.length) return res.sendStatus(404);
        const filmID=[...film].findIndex(e => e.id == req.params.id);
        res.json(film[filmID]);
});






module.exports = router;   