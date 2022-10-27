import renderAddMoviePage from "../Pages/AddMoviePage";
import renderHomePage from "../Pages/HomePage";
import renderViewPage from "../Pages/ViewMoviePage";

const route ={
    '/': renderHomePage,
    '/addMovie': renderAddMoviePage,
    '/viewMovie':renderViewPage,
}

const router =() =>{
    routage()
    changeHistory();
    chargementDePageLorsRenet();
}

function routage (){
    const navItmes=document.querySelectorAll(".nav-link")
    navItmes.forEach((item)=> {
        item.addEventListener('click',(e)=>{
            e.preventDefault();
            const url=e?.target?.dataset?.url;
            const componenentToRender=route[url];
            if(!componenentToRender)throw Error("this route does not exist")
            componenentToRender();
            window.history.pushState({},'',url);    
        })
        
    });

}

function changeHistory (){
    window.addEventListener ('popstate',()=>{
        const url=window.location.pathname;
        const componenentToRender=route[url];
        componenentToRender();
    })
}

function chargementDePageLorsRenet (){
    window.addEventListener('load',()=>{
        const url=window.location.pathname;
        const componenentToRender=route[url];
        if(!componenentToRender)throw Error("this route does not exist")
        componenentToRender();
    })
}


export default router;