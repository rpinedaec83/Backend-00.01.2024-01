const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiCocktail = 'http://thecocktaildb.com';
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
const getCocktail = async (req = request, res = response) => {
    const response = await axios.get(`${apiCocktail}/api/json/v1/1/filter.php?c=cocktail`, {
        params : {

        },
        httpsAgent : agent,
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getCocktail,
}