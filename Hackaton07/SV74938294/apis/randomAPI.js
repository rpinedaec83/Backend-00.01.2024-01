const axios = require('axios');

class RandomUserAPI {
    async getRandomUser() {
        try {
            const response = await axios.get('https://randomuser.me/api/');
            return response.data.results[0];
        } catch (error) {
            throw new Error(`Error al obtener un usuario aleatorio: ${error.message}`);
        }
    }
}

module.exports = RandomUserAPI;
