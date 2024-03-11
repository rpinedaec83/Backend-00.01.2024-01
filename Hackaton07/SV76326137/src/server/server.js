// @@ -0,0 +1,56 @@
const path = require('path');
const express = require('express');

const githubRoutes = require('../modules/github/routes/github.route');
const climaRoutes = require('../modules/clima/routes/clima.route');
const cambioRoutes = require('../modules/cambio/routes/cambio.route');
const pokemonRoutes = require('../modules/pokemon/routes/pokemon.route');
const rickRoutes = require('../modules/RickANDMorty/routes/RickANDMorty.route');
const bebidasRoutes = require('../modules/bebidas/routes/bebidas.route');
const productoRoutes = require('../modules/productos/routes/productos.route');
const fotografiaRoutes = require('../modules/fotografia/routes/fotografia.route');
// const citaRoutes = require('../modules/citas/routes/citas.route');
// const datosRoutes = require('../modules/datos/routes/datos.route');
// const peliculaRoutes = require('../modules/pelicula/routes/pelicula.route');
// const nasaRoutes = require('../modules/nasa/routes/nasa.route');


class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.originPath = "/api"; 

    this.middleware();
    this.routes();
    // this.viewEngine();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname,'../../public')));
  }

  routes() {
    this.app.use(this.originPath, githubRoutes); //RUTA PARA GITHUB
    this.app.use(this.originPath, climaRoutes); //RUTA PARA CLIMA
    this.app.use(this.originPath, cambioRoutes); //RUTA PARA TIPO DE CAMBIO
    this.app.use(this.originPath, pokemonRoutes); //RUTA PARA POKEMON
    this.app.use(this.originPath, rickRoutes); //RUTA PARA RICK Y MORTY
    this.app.use(this.originPath, bebidasRoutes); //RUTA PARA BEBIDAS
    this.app.use(this.originPath, productoRoutes); //RUTA PARA PRODUCTOS DE TIENDA
    this.app.use(this.originPath, fotografiaRoutes); //RUTA PARA FOTOGRAFIAS
    // this.app.use(this.originPath, citaRoutes); //RUTA PARA CITAS FAMOSAS
    // this.app.use(this.originPath, datosRoutes); //RUTA PARA DATOS DE PERSONAS FICTICIAS
    // this.app.use(this.originPath, peliculaRoutes); //RUTA PARA PELICULAS
    // this.app.use(this.originPath, nasaRoutes); //RUTA PARA CLIMA EN NASA
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen in port ${this.port}`)
    });
  }
}

module.exports = Server;