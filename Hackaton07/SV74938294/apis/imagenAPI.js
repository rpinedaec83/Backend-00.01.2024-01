const axios = require('axios');

class PexelsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.pexels.com/v1';
    }

    async searchImages(query, size) {
        try {
            const response = await axios.get(`${this.baseURL}/search?query=${query}&per_page=1&page=1`, {
                headers: {
                    Authorization: this.apiKey,
                },
            });

            const photo = response.data.photos[0];
            if (!photo) {
                throw new Error(`No se encontraron imágenes para "${query}".`);
            }

            const resizedUrl = this.resizeImage(photo.src.original, size);
            return resizedUrl;
        } catch (error) {
            throw new Error(`Error al buscar imágenes: ${error.message}`);
        }
    }

    resizeImage(url, size) {
        const dimensions = size.split('x');
        const width = dimensions[0];
        const height = dimensions[1];
        return `${url}?w=${width}&h=${height}&fit=crop`;
    }
}

module.exports = PexelsAPI;
