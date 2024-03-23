const { Router } = require("express");

const { getPokemon } = require("../services/pokemon.service");
const routes = Router();

routes.get("/tipo/pokemon", getPokemon);

module.exports = routes;
