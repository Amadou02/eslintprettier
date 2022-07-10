// On configure le chargement des variables d'environnement
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const getDbInstance = require('./helper/database');

// On connecte la base de données
getDbInstance();
// on créer l'application express
const app = express();

// on appelle les middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

module.exports = app;
