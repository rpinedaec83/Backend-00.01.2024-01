// app.js
const express = require('express');
const { GitHubAPI, WeatherAPI } = require('./apiGateway');
const app = express();

app.get('/github/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const userData = await GitHubAPI.getUserData(username);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Error consultando datos de GitHub.' });
  }
});

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const weatherData = await WeatherAPI.getCityWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error consultando datos de clima.' });
  }
});






// Agrega rutas y lógica para otras consultas...

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
