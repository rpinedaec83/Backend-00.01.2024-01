const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

//Ruta get
app.get('/', (req, res) => {
  res.send('Hello World de x-code.net')
})

app.get('/clima', (req, res) => {
    res.send('Clima')
  })

//Listener de la aplicacion 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})