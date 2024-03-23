const { Router } = require('express');
const { getWeather } = require ('../services/openweather.service');

const routes = Router();

routes.get('/openweather/:lat/:lon', getWeather);

module.exports = routes;