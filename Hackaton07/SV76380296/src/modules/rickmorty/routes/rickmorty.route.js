const { Router } = require("express");

const { getRickMorty } = require("../services/rickmorty.service");
const routes = Router();

routes.get("/rickandmortyapi.com", getRickMorty);

module.exports = routes;
