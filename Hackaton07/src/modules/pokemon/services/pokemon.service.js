const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiPokemon = 'https://pokeapi.co';

const getPokemon = async (req = request, res = response) => {
    const { limit } = req.params;
    const response = await axios.get(`${apiPokemon}/api/v2/pokemon`, {
        params : {
            limit: limit,
        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

const getPokemonAbility = async (req = request, res = response) => {
    const { id } = req.params;
    const response = await axios.get(`${apiPokemon}/api/v2/ability/${id}`, {
        params : {

        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getPokemon,
    getPokemonAbility,
}