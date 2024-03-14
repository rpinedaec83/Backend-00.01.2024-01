<<<<<<< HEAD
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});
=======
>>>>>>> c8b5b41c3cd394d646e61bbf30d55e08186d9e2f
const { request, response } = require("express");
const axios = require("axios").default;
const apiNasa = "https://api.nasa.gov";
const apiKey = "BPknDvxObDtsDbhTi29xzBmGOCK83UyyWCDA4cHd";

const getPlanetary = async (req = request, res = response) => {
  const response = await axios.get(`${apiNasa}/planetary/apod`, {
    params: {
      api_key: apiKey,
    },
<<<<<<< HEAD
    httpsAgent: agent,
  });
  const data = response.data;
  res.json(data);
=======
  });
  
  const data = response.data;
  res.json(data);

>>>>>>> c8b5b41c3cd394d646e61bbf30d55e08186d9e2f
};

module.exports = {
  getPlanetary,
};
