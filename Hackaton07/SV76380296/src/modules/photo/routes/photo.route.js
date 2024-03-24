const { Router } = require("express");

const { getPhoto } = require("../services/photo.service");
const routes = Router();

routes.get("/api.unsplash.com", getPhoto);

module.exports = routes;
