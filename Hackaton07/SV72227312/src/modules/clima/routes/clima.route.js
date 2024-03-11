const { Router } = require("express");
const { getWeather } = require("../services/clima.service");
const routes = Router();
routes.get('/weather/:ciudad', getWeather);
module.exports = routes;