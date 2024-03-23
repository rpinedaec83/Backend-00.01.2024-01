const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiStore = 'https://fakestoreapi.com';
// https://fakestoreapi.com/products
const getStore = async (req = request, res = response) => {
    const response = await axios.get(`${apiStore}/products`, {
        params : {

        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getStore,
}