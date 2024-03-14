const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiRickandMorty = 'https://rickandmortyapi.com';

const getRickandMorty = async (req = request, res = response) => {
    const response = await axios.get(`${apiRickandMorty}/api/character`, {
        params : {

        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

const getRickandMortyById = async (req = request, res = response) => {
    const { id } = req.params;
    const response = await axios.get(`${apiRickandMorty}/api/character/${id}`, {
        params : {

        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getRickandMorty,
    getRickandMortyById,
}