const { Router } = require("express");

const { getMovies } = require("../services/peliculas.service");
const routes = Router();

routes.get("/tipo/peliculas", getMovies);

module.exports = routes;
