const NAME='user';
let currentUser;

const getUserSessionData = () => {
  if(currentUser !== undefined)return currentUser;

  const retrievedUser = localStorage.getItem(NAME);
  console.log(retrievedUser)
  if (!retrievedUser) return undefined ;
  currentUser = JSON.parse(retrievedUser);
  return currentUser;
};

const setAuthenticatedUser = (authenticatedUser) => {
  const storageValue=JSON.stringify(authenticatedUser);
  localStorage.setItem(NAME,storageValue);
  currentUser = authenticatedUser;

};

const isAuthenticated = () => currentUser !== undefined;


const clearAuthenticatedUser = () => {
  localStorage.removeItem(NAME);
  currentUser=undefined;
};


const setUserCookies = (user) => {
  if(currentUser !== undefined)return currentUser;
  currentUser = user;
  return currentUser;
}
// eslint-disable-next-line object-curly-newline
export { getUserSessionData, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser ,setUserCookies};
