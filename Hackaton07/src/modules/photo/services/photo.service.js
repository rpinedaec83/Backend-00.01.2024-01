const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiPhoto = "https://api.pexels.com";
const apiKey = "Nl6AMevfPPf6K5bxcGLY4kJkZBjqwL9R0l1fbjKXATAuKpSoIkqmqFsh";

const getPhoto = async (req = request, res = response) => {
    const response = await axios.get(`${apiPhoto}/v1/photos/2014422`, {
        params : {

        },
        headers: {
            'Authorization': apiKey,
        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getPhoto,
}