const plumbus = require('rickmortyapi');
const axios = require('axios').default;
const apiRick = 'https://rickandmortyapi.com';

const getPersonaje = async (req = request, res = response) => {
    const { id } = req.params; // Cambiando de name a id
    const response = await axios.get(`${apiRick}/api/character/${id}`); // Cambiando la ruta para obtener el personaje por ID
    const data = response.data;
    console.log(data)
    res.json(data);
};

module.exports = {
    getPersonaje,
};
