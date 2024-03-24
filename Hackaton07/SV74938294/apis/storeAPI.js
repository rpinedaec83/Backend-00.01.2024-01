const axios = require('axios');

class FakeStoreAPI {
    constructor() {
        this.baseURL = 'https://fakestoreapi.com';
    }

    async getProducts() {
        try {
            const response = await axios.get(`${this.baseURL}/products`);
            return response.data; // Devuelve los datos de los productos
        } catch (error) {
            throw new Error(`Error al obtener los productos: ${error.message}`);
        }
    }
}

module.exports = FakeStoreAPI;
