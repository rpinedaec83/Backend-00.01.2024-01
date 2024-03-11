const axios = require('axios');

class CocktailAPI {
    constructor() {
        this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';
    }

    async getRandomCocktail() {
        try {
            const response = await axios.get(`${this.baseURL}/random.php`);
            return response.data.drinks[0]; // Devuelve los datos del cóctel aleatorio
        } catch (error) {
            throw new Error(`Error al obtener un cóctel aleatorio: ${error.message}`);
        }
    }
}

module.exports = CocktailAPI;
