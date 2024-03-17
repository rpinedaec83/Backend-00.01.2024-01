const { Router } = require('express');
const { getCocktail } = require ('../services/cocktail.service');

const routes = Router();

routes.get('/cocktail', getCocktail);

module.exports = routes;