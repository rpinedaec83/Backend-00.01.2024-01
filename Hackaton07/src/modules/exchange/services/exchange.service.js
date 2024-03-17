const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiExchange = 'https://v6.exchangerate-api.com';
const apiKey = 'a35c5441d91808a257405ab6';

const getExchange = async (req = request, res = response) => {
    const { base } = req.params;
    const { target } = req.params;
    const response = await axios.get(`${apiExchange}/v6/${apiKey}/pair/${base}/${target}`, {
        params : {

        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getExchange,
}