const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cookieSession = require('cookie-session');

const usersRouter = require('./routes/users');
const filmsRouter = require('./routes/films');
const authsRouter=require('./routes/auths');

const app = express();

const expiryDateIn3Months = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 3);
const cookieSecreteKey = 'afilm';
app.use(
  cookieSession({
    name: 'user',
    keys: [cookieSecreteKey],
    cookie: {
      httpOnly: true,
      expires: expiryDateIn3Months,
    },
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/films', filmsRouter);
app.use('/auths', authsRouter);

module.exports = app;
