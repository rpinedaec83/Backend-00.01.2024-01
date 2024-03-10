// apiGateway.js
const axios = require('axios');

class GitHubAPI {
  static async getUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error(`Error consultando datos de GitHub para ${username}: ${error.message}`);
      throw error;
    }
  }
}

class WeatherAPI {
  static async getCityWeather(city) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=Default`);
      return response.data;
    } catch (error) {
      console.error(`Error consultando clima para la ciudad de ${city}: ${error.message}`);
      throw error;
    }
  }
}




// Agrega clases y métodos para las otras consultas según sea necesario...

module.exports = {
  GitHubAPI,
  WeatherAPI,
  // Agrega otras APIs aquí...
};