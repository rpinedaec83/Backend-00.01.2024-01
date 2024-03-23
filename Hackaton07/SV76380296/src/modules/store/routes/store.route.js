const { Router } = require("express");

const { getStore } = require("../services/store.service");
const routes = Router();

routes.get("/fakestoreapi.com", getStore);

module.exports = routes;
