const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

//Ruta get
app.get('/', (req, res) => {
    res.send('Hello World de x-code.net')
})

app.get('/clima', (req, res) => {
    let ciudad = req.query.ciudad;
    console.log(ciudad)
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://the-weather-api.p.rapidapi.com/api/weather/${ciudad}',
        headers: { 
          'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186', 
          'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
      
})

//Listener de la aplicacion 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 