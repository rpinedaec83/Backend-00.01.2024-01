const { Router } = require("express");
const { getCambio } = require("../services/cambio.service");
const routes = Router();
routes.get('/cambio/:time', getCambio);
module.exports = routes;