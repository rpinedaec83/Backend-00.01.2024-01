const axios = require('axios');

class MarsRoverAPI {
    async getRoverPhotos(sol) {
        try {
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=DEMO_KEY`);
            return response.data.photos;
        } catch (error) {
            throw new Error(`Error al obtener las fotos del rover: ${error.message}`);
        }
    }

    async getRoverWeather() {
        try {
            const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
            return response.data;
        } catch (error) {
            throw new Error(`Error al obtener el clima de Marte: ${error.message}`);
        }
    }
}

module.exports = MarsRoverAPI;
