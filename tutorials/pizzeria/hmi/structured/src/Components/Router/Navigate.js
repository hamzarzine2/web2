const Navigate = (toUri) => {
    const fromUri = window.location.pathname;
    if (fromUri === toUri) return;
  
    window.history.pushState({}, '', toUri);
    const popStateEvent = new PopStateEvent('popstate', {});
    dispatchEvent(popStateEvent);
  };
  
  export default Navigate;