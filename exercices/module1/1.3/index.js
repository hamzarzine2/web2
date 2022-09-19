const body =document.querySelector("body")
let mess=document.querySelector("#mess")
let affichageCompteur=document.querySelector("#compteur")
let compteur=0;

body.addEventListener("click", CountClick)

function CountClick () {
    console.log(compteur)    
    compteur++;
    affichageCompteur.innerHTML=compteur;
    if(compteur>= 5 && compteur<=9){
        mess.innerHTML="Bravo, bel échauffement !"
    }
    if(compteur>=10){
        mess.innerHTML="Vous êtes passé maître en l'art du clic !"
    }
}