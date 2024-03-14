const { Router } = require('express');
const { getPhoto } = require ('../services/photo.service');

const routes = Router();

routes.get('/photo', getPhoto);

module.exports = routes;