const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

//RUTA GET
app.get('/', (req, res) => {
  res.send('Hello World! desde xcode.net')
})

//EJERCICIO1------------------------------------------------------------
app.get('/github/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    if (!nombre) {
        return res.status(400).send('Nombre de usuario de GitHub requerido');
    }

    let config = {
        method: 'get',
        url: `https://api.github.com/users/${nombre}`,
        headers: { 
            'Accept': 'application/vnd.github.v3+json' // Establecer el encabezado de aceptación para la API de GitHub
        }
    };

    axios.request(config)
        .then((response) => {
            const userData = response.data;

            // Construir la respuesta HTML
            res.send(`
            <h2>Datos de GitHub de ${nombre}</h2>
            <table border="1">
                <tr>
                    <th>Nombre</th>
                    <td>${userData.name}</td>
                </tr>
                <tr>
                    <th>Nombre de usuario</th>
                    <td>${userData.login}</td>
                </tr>
                <tr>
                    <th>Ubicación</th>
                    <td>${userData.location}</td>
                </tr>
                <tr>
                    <th>Repositorios públicos</th>
                    <td>${userData.public_repos}</td>
                </tr>
                <tr>
                    <th>Seguidores</th>
                    <td>${userData.followers}</td>
                </tr>
                <tr>
                    <th>Imagen de perfil</th>
                    <td><img src="${userData.avatar_url}" alt="Avatar de ${nombre}"></td>
                </tr>
            </table>`);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Hubo un error al obtener los datos Usuario.');
        });
});


//EJERCICIO 2-----------------------------------------------------------
app.get('/clima', (req, res) => {
    let ciudad = req.query.ciudad;
console.log(ciudad);
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://the-weather-api.p.rapidapi.com/api/weather/${ciudad}`,
    headers: { 
      'X-RapidAPI-Key': '2d80365bbcmsh1f46a2a3c712822p117f1fjsndf1b5fbd6d62', 
      'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    res.send(`
    <table border="1">
    <tr>
    <th>Dato</th>
    <th>Valor</th>
    </tr>
    <tr>
    <td>ciudad</td>
    <td>${response.data.data.city}</td>
    </tr>
    <tr>
    <td>temperatura</td>
    <td>${response.data.data.temp}</td>
    </tr>
    <tr>
    <td>imagen</td>
    <td><img src="${response.data.data.bg_image}">
    </td>
    </tr>`)
  })
  .catch((error) => {
    console.log(error);
  });
});


//ejercicio 3---------------------------------------------------
app.get('/cambio', (req, res) => {
    let dolar = req.query.dolar;
    if (!dolar) {
        return res.status(400).send('Cantidad de dólares requerida');
    }

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.apis.net.pe/v1/tipo-cambio-sunat',
        headers: { 
            'X-API-Key': '{{token}}' // Reemplazar '{{token}}' con tu token real si es necesario
        }
    };
  
    axios.request(config)
        .then((response) => {
            const tipoCambioData = response.data;

            let precioEnSoles = dolar * tipoCambioData.venta;
            res.send(`
            <h2>Valor de cambio</h2>
            <table border="1">
                <tr>
                    <th>Tipo de cambio</th>
                    <td>${tipoCambioData.venta}</td>
                </tr>
                <tr>
                    <th>Soles</th>
                    <td>${precioEnSoles}</td>
                </tr>
            </table>`);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Hubo un error al obtener el tipo de cambio.');
        });
});


//ejercicio 4 pokemon----------------------------------------
app.get('/pokemon', (req, res) => {
    let pokemonName = req.query.pokemonName;
    if (!pokemonName) {
        return res.status(400).send('Nombre de Pokémon requerido');
    }

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokemon-api3.p.rapidapi.com/pokemon`,
        params: { name: pokemonName },
        headers: { 
            'X-RapidAPI-Key': '2d80365bbcmsh1f46a2a3c712822p117f1fjsndf1b5fbd6d62', 
            'X-RapidAPI-Host': 'pokemon-api3.p.rapidapi.com', 
            'X-API-Key': '{{token}}'
        }
    };

    axios.request(config)
        .then((response) => {
            const pokemonData = response.data;
            let htmlResponse = `
            <table border="1">
                <tr>
                <td>POKEMON</td> 
                <td>${pokemonData.name}</td>
                </tr>
                <tr>
                    <td>experiencia</td>
                    <td>${pokemonData.base_experience}</td>
                </tr>
                <tr>
                    <td>IMAGEN</td>
                    <td><img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}"></td>
                </tr>
            </table>`;

            res.send(htmlResponse);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Hubo un error al obtener los datos del Pokémon.');
        });
});


//EJERCICIO 5
app.get('/pokepoder', (req, res) => {
    let pokemonName = req.query.pokemonName;
    if (!pokemonName) {
        return res.status(400).send('Nombre de Pokémon requerido');
    }

    // Configuración de la solicitud para obtener los datos del Pokémon
    let config = {
        method: 'get',
        url: `https://pokemon-api3.p.rapidapi.com/pokemon`,
        params: { name: pokemonName },
        headers: { 
            'X-RapidAPI-Key': '2d80365bbcmsh1f46a2a3c712822p117f1fjsndf1b5fbd6d62', 
            'X-RapidAPI-Host': 'pokemon-api3.p.rapidapi.com'
        }
    };
    axios.request(config)
        .then((response) => {
            const pokemonData = response.data;
            let poderes = pokemonData.moves.map(move => move.move.name);

            res.send(` 
            <h2>Datos de ${pokemonData.name}</h2>
            <table border="1">
                <tr>
                    <th>POKEMON</th>
                    <td>${pokemonData.name}</td>
                </tr>
                <tr>
                    <th>Poderes</th>
                    <td>${poderes.join(', ')}</td>
                </tr>
                <tr>
                    <th>IMAGEN</th>
                    <td><img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}"></td>
                </tr>
            </table>`
           );
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Hubo un error al obtener los datos del Pokémon.');
        });
});
//Ejercicio 6------------------------------------------------------------------------------------
app.get('/rym', (req, res) => {
    let personaje = req.query.personaje;
console.log(personaje);
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://rickandmortyapi.com/api/character/${personaje}`,
    params: { name: personaje },
    headers: { 
      'X-API-Key': '{{token}}'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    const personajeData = response.data;
    res.send(`
    <h2>Datos de ${personajeData.name}</h2>
    <table border="1">

        <tr>
            <td>Nombre</td>
            <td>${personajeData.name}</td>
        </tr>
        <tr>
            <td>Especie</td>
            <td>${personajeData.species}</td>
        </tr>
        <tr>
            <td>Imagen</td>
            <td><img src="${personajeData.image}" alt="${personajeData.name}"></td>
        </tr>
    </table>`)
  })
  .catch((error) => {
    console.log(error);
  });
});
//EJERCICIO7---------------------------------------------------------------------
app.get('/rymdatos', (req, res) => {
    let personaje = req.query.personaje;
console.log(personaje);
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://rickandmortyapi.com/api/character/${personaje}`,
    params: { name: personaje },
    headers: { 
      'X-API-Key': '{{token}}'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    const personajeData = response.data;
    res.send(`
    <h2>Datos de ${personajeData.name}</h2>
    <table border="1">

        <tr>
            <td>Nombre</td>
            <td>${personajeData.name}</td>
        </tr>
        <tr>
            <td>Especie</td>
            <td>${personajeData.species}</td>
        </tr>
        <tr>
            <td>Foto</td>
            <td><img src="${personajeData.image}" alt="${personajeData.name}"></td>
        </tr>
        <tr>
            <td> DETALLE DEL PERSONAJE</td>
        </tr>
        <tr>
        <td>DETALLE DEL PERSONAJE </td>
        <td>${personajeData.status} </td>
        </tr>
        <tr>
            <td>Genero del personaje</td>
            <td> ${personajeData.gender}</td>
        </tr>
    </table>`)
  })
  .catch((error) => {
    console.log(error);
  });
});

//EJERCICIO 8---------------------------------------------------------------------------
app.get('/cocktail', async (req, res) => {
    try {
        let cocktails = [];
        for (let i = 0; i < 10; i++) {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const cocktailData = response.data.drinks[0];

            let ingredientes = [];
            for (let j = 1; j <= 15; j++) {
                let ingrediente = cocktailData[`strIngredient${j}`];
                if (!ingrediente) break;
                ingredientes.push(ingrediente);
            }

            cocktails.push({
                nombre: cocktailData.strDrink,
                ingredientes: ingredientes.join(', '),
                preparacion: cocktailData.strInstructions,
                foto: cocktailData.strDrinkThumb
            });
        }

        let htmlResponse = `
            <html>
            <head>
                <title>Cócteles Aleatorios</title>
                <style>
                    table { border-collapse: collapse; width: 100%; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                    img { max-width: 100px; max-height: 100px; }
                </style>
            </head>
            <body>
                <h1>Cócteles Aleatorios</h1>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Ingredientes</th>
                        <th>Preparación</th>
                        <th>Foto</th>
                    </tr>`;

        cocktails.forEach(cocktail => {
            htmlResponse += `
                    <tr>
                        <td>${cocktail.nombre}</td>
                        <td>${cocktail.ingredientes}</td>
                        <td>${cocktail.preparacion}</td>
                        <td><img src="${cocktail.foto}" alt="${cocktail.nombre}"></td>
                    </tr>`;
        });

        htmlResponse += `
                </table>
            </body>
            </html>`;

        res.send(htmlResponse);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los cócteles.');
    }
});

//EJERCICIO 9-----------------------------------------------------------------------------

app.get('/mars-photos', async (req, res) => {
    try {
        const sol = req.query.sol;
        const camera = req.query.camera;
        if (!sol || !camera) {
            return res.status(400).send('Parámetros sol y cámara requeridos');
        }

        const apiKey = 'dhne7MqiDbxqOpcrUtnLAAZDjkmq24ayoGCGgrHf'; // Reemplazar 'DEMO_KEY' con tu propia API key de la NASA

        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`);
        const photos = response.data.photos;

        let htmlResponse = `
            <html>
            <head>
                <title>Fotos de Marte</title>
            </head>
            <body>
                <h1>Fotos del Rover Curiosity en Marte</h1>
                <table border="1">
                    <tr>
                        <th>Imagen</th>
                        <th>Sol</th>
                        <th>Cámara</th>
                        <th>Fecha</th>
                    </tr>`;

        photos.forEach(photo => {
            htmlResponse += `
                    <tr>
                        <td><img src="${photo.img_src}" alt="Foto de Marte"></td>
                        <td>${photo.sol}</td>
                        <td>${photo.camera.full_name}</td>
                        <td>${photo.earth_date}</td>
                    </tr>`;
        });

        htmlResponse += `
                </table>
            </body>
            </html>`;

        res.send(htmlResponse);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener las fotos de Marte.');
    }
});

//EJERCICIOS 10-------------------------------------------------------------------------------
app.get('/photos', async (req, res) => {
    try {
        const theme = req.query.theme; // Tema de la fotografía
        const size = req.query.size; // Tamaño de la fotografía (raw, full, regular, small, thumb)

        if (!theme || !size) {
            return res.status(400).send('Parámetros theme y size requeridos');
        }

        const accessKey = 'GeJZhXQRanLaMCbkmzG-exKCy5M9Pn2rXQq7NjZfIFU'; // Reemplaza 'TU_ACCESS_KEY' con tu propia clave de acceso de Unsplash

        const response = await axios.get(`https://api.unsplash.com/photos/random?query=${theme}&orientation=landscape&content_filter=high&featured=true&count=1&client_id=${accessKey}`);
        const photo = response.data[0];

        if (!photo) {
            return res.status(404).send('No se encontró ninguna fotografía para el tema proporcionado');
        }

        const htmlResponse = `
            <html>
            <head>
                <title>Fotografía de ${theme}</title>
            </head>
            <body>
                <h1>Fotografía de ${theme}</h1>
                <div style="margin: 10px;">
                    <img src="${photo.urls[size]}" alt="${photo.alt_description}">
                    <p>Descripción: ${photo.alt_description}</p>
                    <p>Autor: ${photo.user.name}</p>
                </div>
            </body>
            </html>`;

        res.send(htmlResponse);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener la fotografía.');
    }
});

//Ejercicio 11-----------------------------------------------------
app.get('/citas-famosas', async (req, res) => {
    try {
        // Realizar una solicitud GET a la API de citas
        const response = await axios.get('https://api.quotable.io/random');
        // Obtener la cita aleatoria de la respuesta
        const cita = response.data;

        // Construir la respuesta HTML
        res.send( `
            <html>
            <head>
                <title>Cita Famosa</title>
            </head>
            <body>
                <h1>Cita Famosa</h1>
                <blockquote>
                    <p>${cita.content}</p>
                    <footer>- ${cita.author}</footer>
                </blockquote>
            </body>
            </html>`);
} 
       catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener la cita famosa.');
    }
});
//EJERCICIO 12-----------------------------------------------------------
app.get('/datos-usuario', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        const userData = response.data.results[0];

        const userDataObj = {
            username: userData.login.username,
            name: `${userData.name.first} ${userData.name.last}`,
            email: userData.email,
            address: `${userData.location.street.number} ${userData.location.street.name}`,
            phone: userData.phone,
            birthdate: new Date(userData.dob.date).toLocaleDateString()
        };

        res.send(`
            <html>
            <head>
                <title>Datos de Usuario</title>
            </head>
            <body>
                <h1>Datos del Usuario</h1>
                <table border="1">
                    <tr>
                        <th>Dato</th>
                        <th>Valor</th>
                    </tr>
                    ${Object.entries(userDataObj).map(([key, value]) => `
                        <tr>
                            <td>${key.replace(/^\w/, c => c.toUpperCase())}</td>
                            <td>${value}</td>
                        </tr>
                    `).join('')}
                </table>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        res.status(500).send('Hubo un error al obtener los datos del usuario.');
    }
});


//EJERCICIO 13-----------------------------------------------------------
app.get('/pelis', (req, res) => {
    let peliculas = req.query.peliculas;
console.log(peliculas);
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://movies-api14.p.rapidapi.com/shows',
    headers: { 
      'X-RapidAPI-Key': '59f53de4afmsh3373d263968bf51p1595d1jsnbc30a21db7ba', 
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com', 
      'X-API-Key': '{{token}}'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    const peliculaData = response.data;
    res.send(`
    <table border="1">
    <tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr>
    <tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr><tr>
    <th>${peliculaData.peliculaData.original_title}</th>
    <th><img src="${peliculaData.peliculaData.poster_path}"></th>
    </tr>
    </tr>`)
  })
  .catch((error) => {
    console.log(error);
  });
});



//EJERCICIO 14-----------------------------------------------------------------------


//LISTENER DE LA APLICACION
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

