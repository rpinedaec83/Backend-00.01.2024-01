const express = require('express')
const path = require("path");
const axios = require('axios');
const { config } = require('process');
const app = express()
const port = 3000
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public")));

//Ruta get 
app.get('/', (req, res) => {
    res.send('Hello World desde x-codec.net!')
})
//Ruta Git
app.get('/github/:username', (req, res) => {
    let username = req.params.username;
       let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.github.com/users/${username}`
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(`<table>
    <tr>
        <th>Datos</th>
        
    </tr>
    <tr>
        <td>Nombre</td>
        <td>${response.data.name}</td>
    </tr>
    <tr>
        <td>Login</td>
        <td>${response.data.login}</td>
    </tr>
    <tr>
        <td>Repositorios Publicados</td>
        <td>${response.data.public_repos}</td>
    </tr>
    <tr>
        <td>Url</td>
        <td><a href="${response.data.html_url}" target='_blank'>${response.data.html_url}</a></td>
    </tr>
    
</table>`);
        })
        .catch((error) => {
            console.log(error);
        });
})
//ruta clima
app.get('/clima/:ciudad', (req, res) => {
    let ciudad = req.params.ciudad;
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://the-weather-api.p.rapidapi.com/api/weather/${ciudad}`,
        headers: {
            'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
            'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
        }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(`<table>
        <tr>
            <th>Dato</th>
            <th>Valor</th>
        </tr>
        <tr>
            <td>Ciudad</td>
            <td>${response.data.data.city}</td>
        </tr>
        <tr>
            <td>Temperatura</td>
            <td>${response.data.data.temp}</td>
        </tr>
        <tr>
            <td>Icono</td>
            <td><img src="${response.data.data.bg_image}"></td>
        </tr>
    </table>`);
        })
        .catch((error) => {
            console.log(error);
        });

});
//tipo de cambio
app.get('/cambio',(req,res)=>{
    let moneda = 'PEN'
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.frankfurter.app/latest${ciudad}`,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': 'null'
        }
    }; 
})
//lista de Pokemones
app.get('/pok',(req,res)=>{
     
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://pokeapi.co/api/v2/pokemon?limit=2&offset=0',
                 
      };
      axios.request(config)
      .then((response) => {
          console.log(JSON.stringify(response.data));
          res.send(`<table>
      <tr>
          <td>Nombre</td>
          <td>${response.data.results[0].name}</td>
      </tr>
      <tr>
          <td>url</td>
          <td>${response.data.results[0].url}</td>
      </tr>
      <tr>
      <td>Nombre</td>
          <td>${response.data.results[1].name}</td>
      </tr>
      <tr>
          <td>url</td>
          <td>${response.data.results[1].url}</td>
      </tr>
       
  </table>`);
      })
      .catch((error) => {
          console.log(error);
      });
})
//Consultar los poderes de un pokemon especifico      
app.get('/poder/:poke',(req,res)=>{
    let poke = req.params.poke
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon/${poke}`,
                 };
                 axios.request(config)
                 .then((response) => {
                      
                     res.send(response.data.abilities);
                 })
                 .catch((error) => {
                     console.log(error);
                 });         
})

//personajes principales de rick and morty
app.get('/ram',(req,res)=>{
    let prin = '1,2,3,4,5';
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://rickandmortyapi.com/api/character/${prin}`,
        };
        axios.request(config)
      .then((response) => {
                  res.send(`<table>
      <tr>
          <td>Nombre</td>
          <td>${response.data[0].name}</td>
      </tr>
      <tr>
          <td> <img width="200" height="200" src="${response.data[0].image}"></td>
      </tr>
      <tr>
      <td>Nombre</td>
      <td>${response.data[1].name}</td>
  </tr>
  <tr>
      <td> <img width="200" height="200" src="${response.data[1].image}"></td>
  </tr>
      <tr>
      <td>Nombre</td>
      <td>${response.data[2].name}</td>
    </tr>
    <tr>
      <td> <img  width="200" height="200" src="${response.data[2].image}"></td>
    </tr>
    <tr>
    <td>Nombre</td>
    <td>${response.data[3].name}</td>
    </tr>
    <tr>
    <td> <img width="200" height="200" src="${response.data[3].image}"></td>
    </tr>
    <tr>
    <td>Nombre</td>
    <td>${response.data[4].name}</td>
    </tr>
    <tr>
    <td> <img width="200" height="200" src="${response.data[4].image}"></td>
    </tr>
        
      </table>`);
          })
          .catch((error) => {
              console.log(error);
      });
    })
//detalle de cada personaje
app.get('/ram/:id',(req,res)=>{
    let prin = req.params.id;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://rickandmortyapi.com/api/character/${prin}`,
        };
        axios.request(config)
      .then((response) => {
                  res.send(
                    "Nombre:  "+
                    response.data.name 
                    +  '<br>'+
                     "Especie:  "+
                    response.data.species
                    +'<br>'+
                    "Genero:  "+
                     response.data.gender
                    + '<br>'+
                    "Origen:  "+
                    response.data.origin.name
                     + '<br>'+
                      "Ubicacion:  "+
                     response.data.location.name
                    );
                  
               
                  
                  
          })
          .catch((error) => {
              console.log(error);
      });
    })


app.get('/peliculas', (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        headers: {
            'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            //res.send("Hola");
            res.render('pages/index', {
                results: response.data.results
            });
        })
        .catch((error) => {
            console.log(error);
        });

});



//listener de la aplicacion
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})