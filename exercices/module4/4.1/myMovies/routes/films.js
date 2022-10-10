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
        if(filterDuration === undefined){
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


    router.post('/',(req,res) => {
        const title= req?.body?.title.length !== 0 ? req.body.title : undefined;
        const duration=req?.body?.duration.length !== 0 ? req.body.duration : undefined;
        const budget=req?.body?.budget.length !== 0 ? req.body.budget : undefined;
        const link = req?.body?.link.length !== 0 ? req.body.link : undefined;

        if(!title || !duration || !budget || !link) return res.sendStatus(400);
      
        const idAdd=film.length+1;

        const itemAdd={
                id : idAdd,
                title: title,
                duration: duration,
                budget: budget,
                link: link
        }

        film.push(itemAdd);

        res.json(itemAdd);
});

    router.delete('/:id', (req,res) => {        
        console.log(req.params.id)
        if (req.params.id<0 || req.params.id>film.length) return res.sendStatus(404);
        const filmID=[...film].findIndex(e => e.id == req.params.id);
        const filmSupp=film[filmID];
        film.splice(filmID,1);
        res.json(filmSupp);
        
    });

        router.patch('/:id',(req,res) => {
            
            const titre=req?.body?.title;
            const duree=req?.body?.duration;
            const budget=req?.body?.budget;
            const lien=req?.body?.link;

            
            if (req.params.id<0 || req.params.id > film.length) return res.sendStatus(404);

            if((!titre && !duree && !budget && !lien) || titre?.length===0 
            || duree?.length===0||budget?.length===0||lien?.length===0)return res.sendStatus(400);
            const filmID=[...film].findIndex(e => e.id == req.params.id);
   
            const filmUptad={...film[filmID],...req.body}

            film[filmID]=filmUptad;

            res.json(filmUptad);
        });





module.exports = router;   