const { Router } = require('express');
const { getPokemon, getPokemonAbility } = require ('../services/pokemon.service');

const routes = Router();

routes.get('/pokemon/:limit', getPokemon);
routes.get('/pokemon/ability/:id', getPokemonAbility);

module.exports = routes;