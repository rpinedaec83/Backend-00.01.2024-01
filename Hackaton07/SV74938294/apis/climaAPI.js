const axios = require('axios');

class ClimaAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getCountryWeather(country) {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${this.apiKey}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error al consultar el clima para el país ${country}: ${error.message}`);
        }
    }
}

module.exports = ClimaAPI;

