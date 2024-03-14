const path = require("path");
const express = require("express");
const githubRoutes = require("../modules/github/routes/github.route");
const openweatherRoutes = require("../modules/openweather/routes/openweather.route");
const exchangeRoutes = require('../modules/exchange/routes/exchange.route');
const pokemonRoutes = require('../modules/pokemon/routes/pokemon.route');
const rickandmortyRoutes = require('../modules/rickandmorty/routes/rickandmorty.route');
const cocktailRoutes = require('../modules/cocktail/routes/cocktail.route');
const storeRoutes = require('../modules/store/routes/store.route');
const photoRoutes = require('../modules/photo/routes/photo.route');

const nasaRoutes = require("../modules/nasa/routes/nasa.route");

class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.originPath = "/api";

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.static(path.join(__dirname, "../../public")));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.originPath, githubRoutes);
    this.app.use(this.originPath, openweatherRoutes);
    this.app.use(this.originPath, exchangeRoutes);
    this.app.use(this.originPath, pokemonRoutes);
    this.app.use(this.originPath, rickandmortyRoutes);
    this.app.use(this.originPath, cocktailRoutes);
    this.app.use(this.originPath, storeRoutes);
    this.app.use(this.originPath, photoRoutes);


    this.app.use(this.originPath, nasaRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen in port ${this.port} 👩‍🚀🚀`);
    });
  }
}

module.exports = Server;
