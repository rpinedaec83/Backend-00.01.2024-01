const express = require('express')
const path= require("path");
const axios = require('axios');
const app = express()
const port = 8080
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public")));

//Ruta get 
app.get('/', (req, res) => {
  res.send('Hello World desde x-codec.net!')
})

app.get('/usuarioGit', (req, res) =>{

    let nombreUsuario = req.query.user;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.github.com/users/${nombreUsuario}`,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
      };

      axios.request(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        //res.send("Hola");
        res.send(
            `<p1> ${JSON.stringify(response.data)} </p1>`
        );
      })
      .catch((error) => {
        console.log(error);
      }); 
    
})

app.get('/climaUbicacion', (req, res)=>{

    let latitud = parseFloat(req.query.latitud);
    let longitud = parseFloat(req.query.longitud);

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://open-weather13.p.rapidapi.com/city/latlon/${latitud}/${longitud}`,
        headers: { 
          'X-RapidAPI-Key': 'f4bf684981msh788f535840831d9p112d51jsnf9111c2a62d0', 
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com', 
        }
      };
      
      axios.request(config)
      .then((response) => {
        res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
    })
})

app.get('/cambioDolar', (req, res) =>{
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.apis.net.pe/v1/tipo-cambio-sunat`,
        headers:  
            'Referer: https://apis.net.pe/tipo-de-cambio-sunat-api'
      };
      
      axios.request(config)
      .then((response) => {
        res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
    })
})

app.get('/listaPokemons', (req, res) =>{
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500`
      };
      
      axios.request(config)
      .then((response) => {
        let listaPokemon = response.data.results.map(pokemon => pokemon.name);
        let html = '<ol>';
        listaPokemon.forEach(element => {
            html += `<li>${element}</li>`;
        });
        html += '</ol>';
        res.send(html);
      })
      .catch((error) => {
        console.log(error);
    })
    
})

//listener de la aplicacion
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})