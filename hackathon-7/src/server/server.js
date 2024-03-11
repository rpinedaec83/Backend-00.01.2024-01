const path = require("path");
const express = require("express");
const githubRoutes = require("../modules/github/routes/github.route");
const nasaRoutes = require("../modules/nasa/routes/nasa.route");
const frankfurterRoutes = require("../modules/frankfurter/routes/frankfurter.route");
const weatherRoutes = require("../modules/WeatherReport/routes/weather.route");
const pokemonRoutes = require("../modules/pokemon/routes/pokemon.route");
const pokemonAbilitiesRoutes = require("../modules/pokemonabilities/routes/pokemonabilities.route");
const peliculasRoutes = require("../modules/peliculas/routes/peliculas.route");
const infopeliculasRoutes = require("../modules/infoPeliculas/routes/infopeliculas.route");
const citaRoutes = require("../modules/cita/routes/cita.route");
const rickprincipalesRoutes = require("../modules/rickprincipales/routes/rickprincipales.route");
const tiendafalsaRoutes = require("../modules/tiendafalsa/routes/tiendafalsa.route");

class Server 
{
  constructor() 
  {
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
    this.app.use(this.originPath, nasaRoutes);
    this.app.use(this.originPath, frankfurterRoutes);
    this.app.use(this.originPath, weatherRoutes);
    this.app.use(this.originPath, pokemonRoutes);
    this.app.use(this.originPath, pokemonAbilitiesRoutes);
    this.app.use(this.originPath, peliculasRoutes);
    this.app.use(this.originPath, infopeliculasRoutes);
    this.app.use(this.originPath, citaRoutes);
    this.app.use(this.originPath, rickprincipalesRoutes);
    this.app.use(this.originPath, tiendafalsaRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen in port ${this.port} 🚀🚀`);
    });
  }
}

module.exports = Server;
