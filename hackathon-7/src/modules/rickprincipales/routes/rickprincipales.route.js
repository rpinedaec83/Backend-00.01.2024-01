const { Router } = require("express");

const { getProtagonistas } = require("../services/rickprincipales.service");
const routes = Router();

routes.get("/personajes/protagonistas", getProtagonistas);

module.exports = routes;
