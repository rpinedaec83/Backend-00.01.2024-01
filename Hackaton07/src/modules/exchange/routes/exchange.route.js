const { Router } = require('express');
const { getExchange } = require ('../services/exchange.service');

const routes = Router();

routes.get('/exchange/:base/:target', getExchange);

module.exports = routes;