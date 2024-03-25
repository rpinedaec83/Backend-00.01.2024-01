const { Router } = require("express");

const { getinfoMovies } = require("../services/infopeliculas.service");
const routes = Router();

routes.get("/info/peliculas", getinfoMovies);

module.exports = routes;
