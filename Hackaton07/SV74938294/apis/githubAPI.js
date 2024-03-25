const axios = require('axios');

class GitHubAPI {
    constructor(username) {
        this.username = username;
    }

    async getUserData() {
        try {
            const response = await axios.get(`https://api.github.com/users/${this.username}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error al consultar los datos de GitHub para el usuario ${this.username}: ${error.message}`);
        }
    }
}

module.exports = GitHubAPI;
