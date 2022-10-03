const navigate = (toUrl)=>{
    const fromUrl=window.location.pathname;
    if(toUrl===fromUrl) return;

    window.history.pushState({},'',toUrl)
    const popstateEvent=new PopStateEvent('popstate',{})
    dispatchEvent(popstateEvent);
}


export default navigate;