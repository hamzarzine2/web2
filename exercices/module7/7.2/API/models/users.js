const jwt = require('jsonwebtoken');
const path = require('node:path');
const bcrypt= require('bcrypt');
const { parse, serialize } = require('../utils/json');

const jwtSecret = 'allFilmList';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const saltRound=10;

const userList = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin',saltRound),
  },
];
async function register(username, password) {
  const userRegister = getLineUser(username);
  if (userRegister) return undefined;

  await createUser(username, password);

  const token = jwt.sign({ username }, jwtSecret, { expiresIn: lifetimeJwt });

  const UserConnected = {
    username,
    token,
  };

  return UserConnected;
}

async function login(username, password) {
  const userLogin = getLineUser(username);
  if (!userLogin) return undefined;

  const passwordCompare= await bcrypt.compare(password, userLogin.password);

  if (!passwordCompare) return undefined;

  const token = jwt.sign({ username }, jwtSecret, { expiresIn: lifetimeJwt });

  const UserConnected = {
    username,
    token,
  };
  return UserConnected;
}

function getLineUser(username) {
  const users = parse(jsonDbPath, userList);
  const indexOfUserFound = users.findIndex((e) => e.username === username);
  if (indexOfUserFound < 0) return undefined;
  return users[indexOfUserFound];
}

async function createUser(username, password) {
  const users = parse(jsonDbPath, userList);
  const hashedPassword = await bcrypt.hashSync(password,saltRound);

  const createdUser = {
    id: getNextId(),
    username,
    password :hashedPassword,
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

module.exports = { register, login, getLineUser };
