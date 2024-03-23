const { Router } = require('express');
const { getStore } = require ('../services/store.service');

const routes = Router();

routes.get('/store', getStore);

module.exports = routes;