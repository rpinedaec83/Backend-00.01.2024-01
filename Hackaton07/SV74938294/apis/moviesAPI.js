const axios = require('axios');

class MovieDBAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getTopMovies() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`);
            return response.data.results;
        } catch (error) {
            throw new Error(`Error al obtener el top de películas: ${error.message}`);
        }
    }

    async getMovieDetails(movieId) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error al obtener los detalles de la película: ${error.message}`);
        }
    }
}

module.exports = MovieDBAPI;
