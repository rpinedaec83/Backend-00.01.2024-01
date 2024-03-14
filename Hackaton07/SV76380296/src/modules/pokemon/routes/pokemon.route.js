const { Router } = require("express");

const { getPokemon } = require("../services/pokemon.service");
const routes = Router();

routes.get("/pokeapi.co", getPokemon);

module.exports = routes;
