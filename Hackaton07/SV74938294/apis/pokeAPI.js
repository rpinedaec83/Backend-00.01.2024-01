const axios = require('axios');

class PokemonAPI {
    constructor() {
        // No se necesita inicializar nada en el constructor en este caso
    }

    async getPokemonData(pokemonName) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error al consultar los datos del Pokémon ${pokemonName}: ${error.message}`);
        }
    }
    
    async getPokemonMoves(pokemonName) {
        try {
            // Obtener los datos del Pokémon
            const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            
            // Extraer la lista de movimientos del Pokémon
            const moves = pokemonData.data.moves.map(move => move.move.name);
            
            return moves;
        } catch (error) {
            throw new Error(`Error al consultar los movimientos del Pokémon ${pokemonName}: ${error.message}`);
        }
    }
    
}

module.exports = PokemonAPI;
