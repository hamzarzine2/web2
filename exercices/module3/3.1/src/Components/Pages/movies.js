const film=[];
film.push({
    title : 'one piece : red',
    duration : 290,
    budget : 230,
    link : 'https://www.allocine.fr/film/fichefilm_gen_cfilm=298674.html'
})

function addfilm (titre,duree,argent,lien){
    film.push({
        title : `${titre}`,
        duration : duree,
        budget : argent,
        link : lien
    })
}

function filmAsLine(){
    let ligne=""
    film.forEach((item) => {
        ligne+='<tr>'
        ligne+=`<td><a href=${item.link}>${item.title}</a></td>`
        ligne+=`<td>${item.duration}</td>`
        ligne+=`<td>${item.budget}</td>`
        ligne+='</tr>'
    });
    return ligne;
}

export {addfilm,film,filmAsLine}