const { Router } = require("express");

const { getWeather } = require("../services/weather.service");
const routes = Router();

routes.get("/api/weather", getWeather);

module.exports = routes;
