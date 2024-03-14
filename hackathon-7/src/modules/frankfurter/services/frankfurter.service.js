const { request, response } = require("express");
const axios = require("axios"); 
const apiFrankfurter = "https://api.frankfurter.app"; 
const apiKey = "BPknDvxObDtsDbhTi29xzBmGOCK83UyyWCDA4cHd";

const getFrankfurter = async (req = request, res = response) => {
  try {
    const response = await axios.get(`${apiFrankfurter}/latest`, {
      params: {
        api_key: apiKey,
      },
    });

    const data = response.data;

    
    const exchangeResponse = await axios.get(`${apiFrankfurter}/latest`, {
      params: {
        amount: 10,
        from: "GBP",
        to: "PEN",
        api_key: apiKey,
      },
    });

    const exchangeData = exchangeResponse.data;

    res.json({
      frankfurterData: data,
      exchangeRate: exchangeData.rates.PEN,
    });
  } catch (error) {
    console.error("Error en los datos de la API: ", error);
    res.status(500).json({ error: "Error en los datos de la API" });
  }
};

module.exports = {
  getFrankfurter,
};