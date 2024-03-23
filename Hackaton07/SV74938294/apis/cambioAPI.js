const axios = require('axios');

class TipoCambioAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getTipoCambio() {
        try {
            const response = await axios.get('https://api.apis.net.pe/v1/tipo-cambio-sunat', {
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

module.exports = TipoCambioAPI;
