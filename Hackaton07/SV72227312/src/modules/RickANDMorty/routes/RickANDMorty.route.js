const { Router } = require("express");
const { getPersonaje } = require("../services/RickANDMorty.service");
const routes = Router();
routes.get('/rickmorty/character/:id', getPersonaje); // Cambiando :name por :id
module.exports = routes;