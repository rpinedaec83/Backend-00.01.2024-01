const axios = require('axios');

class RyMAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getPersonajes() {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character', {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error al consultar el tipo de cambio: ${error.message}`);
        }
    }
}

module.exports = RyMAPI;