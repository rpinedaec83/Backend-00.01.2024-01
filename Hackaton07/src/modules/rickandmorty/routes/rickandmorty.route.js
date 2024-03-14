const { Router } = require('express');
const { getRickandMorty, getRickandMortyById } = require ('../services/rickandmorty.service');

const routes = Router();

routes.get('/rickandmorty/character', getRickandMorty);
routes.get('/rickandmorty/character/:id', getRickandMortyById);

module.exports = routes;