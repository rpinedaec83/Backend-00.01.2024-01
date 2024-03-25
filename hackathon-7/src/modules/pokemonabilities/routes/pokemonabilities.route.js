const { Router } = require("express");

const { getPokemonAbilities } = require("../service/pokemonabilities.service");
const routes = Router();

routes.get("/tipo/habilidades/pokemon", getPokemonAbilities);

module.exports = routes;
