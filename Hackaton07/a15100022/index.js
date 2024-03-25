const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000
//Ruta get
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//*****************************Clima**************************************** */
app.get('/clima',(req,res)=>{
    let ciudad = req.query.ciudad;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://the-weather-api.p.rapidapi.com/api/weather/${ciudad}`,
        headers: { 
          'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186', 
          'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
        }
      };
      axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

});
   


//*****************************************Usarios git********************************************************* */
app.get('/github/:username', (req, res) => {
    const username = req.params.username;
    const config = {
        method: 'get',
        url: `https://api.github.com/users/${username}`,
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener datos de GitHub' });
        });
});

//**************************************cambio dolar peru********************* */
// Ruta para consultar el tipo de cambio del dólar en Perú
app.get('/tipo-cambio', async (req, res) => {
    try {
        // Puedes cambiar la URL de la API según la que estés utilizando
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');

        // Obtener el tipo de cambio específico para el nuevo sol peruano (PEN)
        const tipoCambio = response.data.rates.PEN;

        res.json({ tipoCambio, moneda: 'PEN', base: 'USD' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el tipo de cambio' });
    }
});

//***************************Pokemon****************************** */
app.get('/pokemones', async (req, res) => {
    try {
        // Realizar la primera llamada para obtener el número total de Pokémon
        const countResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const totalCount = countResponse.data.count;

        // Calcular el número de páginas necesarias
        const totalPages = Math.ceil(totalCount / 20); // Limitando a 20 Pokémon por página

        // Realizar llamadas para cada página y obtener la lista completa
        const allPokemons = [];

        for (let page = 1; page <= totalPages; page++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`);
            const pokemons = response.data.results.map(pokemon => pokemon.name);
            allPokemons.push(...pokemons);
        }

        res.json({ pokemones: allPokemons });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de Pokémon' });
    }
});
//*****************************Pokemon especifico************************************* */
app.get('/poderes/:pokemon', async (req, res) => {
    const pokemonName = req.params.pokemon;

    try {
        // Obtener información del Pokémon
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Obtener los poderes (habilidades) del Pokémon
        const abilities = response.data.abilities.map(ability => ability.ability.name);

        res.json({ pokemon: pokemonName, poderes: abilities });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los poderes del Pokémon' });
    }
});

//********************personajes de Rick and Morty************************** */
app.get('/personajes', async (req, res) => {
    try {
        // Realizar la solicitud a la API de Rick and Morty para obtener los personajes
        const response = await axios.get('https://rickandmortyapi.com/api/character');

        // Obtener la lista de personajes con sus respectivos IDs
        const characters = response.data.results.map(character => ({
            id: character.id,
            name: character.name,
            species: character.species,
            status: character.status,
            image: character.image,
        }));

        res.json({ personajes: characters });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de personajes de Rick and Morty' });
    }
});

/*******************************************detalle del persnonaje */
app.get('/personajes/:id', async (req, res) => {
    const characterId = req.params.id;

    try {
        // Realizar la solicitud a la API de Rick and Morty para obtener el detalle del personaje
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);

        // Obtener la información detallada del personaje
        const characterDetail = {
            name: response.data.name,
            species: response.data.species,
            status: response.data.status,
            image: response.data.image,
            // Agrega más propiedades según la necesidad
        };

        res.json({ personaje: characterDetail });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el detalle del personaje de Rick and Morty' });
    }
});

////***************************Consultar el top 10 de bebidas y cocteles */
app.get('/top-bebidas', async (req, res) => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
        };

        axios.request(config)
            .then((response) => {
                // Obtener el top 10 de bebidas y cócteles
                const topBebidas = response.data.drinks.slice(0, 10).map(drink => ({
                    nombre: drink.strDrink,
                    id: drink.idDrink,
                    imagen: drink.strDrinkThumb,
                }));

                console.log(JSON.stringify(topBebidas));
                res.json({ topBebidas });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error: 'Error al obtener el top 10 de bebidas y cócteles' });
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});
//*************************productos de una tienda  */

app.get('/productos', (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://fakestoreapi.com/products',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.json(response.data); // Envía la respuesta como JSON
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Error en la solicitud a la API de productos' });
        });
});
//*******************traer Fotografias con un determinado tema y tamaño****************** */
app.get('/fotos', (req, res) => {
    let tema = req.query.tema;
    let tamaño = req.query.tamaño;

    let config = {
        method: 'get',
        url: 'https://api.unsplash.com/photos',
        params: {
            query: tema,
            per_page: 1, 
            orientation: 'landscape', 
            width: tamaño, 
        },
        headers: {
            'Authorization': '-1c-JDNsuWM0SfFh0x-8G42alWaV8IAOeCgdG_dndB8', // 
        },
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Error al obtener las fotos');
        });
});

//******************************************citas */
app.get('/citas', (req, res) => {
    let config = {
        method: 'get',
        url: 'https://api.quotable.io/random',
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Error al obtener la cita');
        });
});
//***************************usuario ficticio */

app.get('/datos-usuario', (req, res) => {
    let userId = req.query.userId || 1; // Por defecto, obtendrá datos del usuario con ID 1
    let config = {
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Error al obtener los datos del usuario');
        });
});

//********************/top peliculas */
app.get('/peliculas',(req,res)=>{
    let peliculas = req.query.peliculas;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://moviesdatabase.p.rapidapi.com/titles/x/${peliculas}`,
        headers: { 
          'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186', 
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        //res.send("Hola");
        res.render('pages/index', {
            results: response.data.results
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
});
//*************************detalles peicula***************************** */
app.get('/pelicula', async (req, res) => {
    try {
      const { titulo } = req.query;
      if (!titulo) {
        return res.status(400).json({ error: 'Debes proporcionar el título de la película.' });
      }
  
      const apiKey = 'tu_api_key_de_OMDB'; // Reemplaza con tu propia API key de OMDB
      const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(titulo)}`;
  
      const response = await axios.get(apiUrl);
  
      if (response.data.Error) {
        return res.status(404).json({ error: 'No se encontró la película.' });
      }
  
      const pelicula = {
        titulo: response.data.Title,
        año: response.data.Year,
        director: response.data.Director,
        genero: response.data.Genre,
        sinopsis: response.data.Plot,
      };
  
      res.json(pelicula);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocurrió un error al obtener el detalle de la película.' });
    }
  });

//****************************************datos marte */


app.get('/datos-marte', async (req, res) => {
    try {
      const apiKey = 'ebY503aCZFUxdc0i4xUZ8GA5ilb4sVah7NWRlCXq'; // Regístrate en la API de la NASA para obtener tu propia clave API
      const apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
  
      const response = await axios.get(apiUrl);
  
      if (!response.data || response.data.error) {
        return res.status(404).json({ error: 'No se encontraron datos de Marte.' });
      }
  
      const datosMarte = {
        sols: response.data.sol_keys,
        clima: response.data,
        ultimaActualizacion: new Date(response.data.Last_UTC),
      };
  
      res.json(datosMarte);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocurrió un error al obtener los datos de Marte.' });
    }
  });
  
//Listener de la aplicacion
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})