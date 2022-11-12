const jwt = require('jsonwebtoken');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jwtSecret = 'allFilmList';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const userList=[{
    id:1,
    username:"admin",
    password:"admin",    
}
]
function register (username,password){
    const userRegister=getLineUser(username);
    if(userRegister)return undefined;
    
    createUser(username,password);
    
    const token=jwt.sign({username},jwtSecret,{expiresIn:lifetimeJwt});

    const UserConnected= {
        username,
        token,
    }

    return UserConnected;


}

function login(username,password){
    const userLogin=getLineUser(username);
    if(!userLogin)return undefined;
    if(userLogin.password !== password)return undefined;

    const token = jwt.sign({username},jwtSecret,{expiresIn:lifetimeJwt});

    const UserConnected={
        username,
        token,
    }
    return UserConnected;
}



function getLineUser(username){
    const users= parse(jsonDbPath,userList);
    const indexOfUserFound=users.findIndex(e=> e.username===username);
    if(indexOfUserFound<0)return undefined;
    return users[indexOfUserFound];

}

function createUser(username,password){

  const users = parse(jsonDbPath, userList);

  const createdUser = {
    id: getNextId(),
    username,
    password,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, userList);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}


module.exports={register,login,getLineUser,};
