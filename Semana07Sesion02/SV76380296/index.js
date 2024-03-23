const express = require('express')
const path= require("path");
const axios = require('axios');
const app = express()
const port = 3000
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public")));

//Ruta get 
app.get('/', (req, res) => {
  res.send('Hello World desde x-codec.net!')
})

app.get('/clima', (req, res) => {
  let ciudad = req.query.ciudad;
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://the-weather-api.p.rapidapi.com/api/weather/mumbai',
    headers: { 
      'X-RapidAPI-Key': 'fa1876405emsh3bb818bab686a8bp1c6f35jsnf8d55ecd3e2c', 
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

app.get('/peliculas', (req, res) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    headers: {
      'X-RapidAPI-Key': 'fa1876405emsh3bb818bab686a8bp1c6f35jsnf8d55ecd3e2c',
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