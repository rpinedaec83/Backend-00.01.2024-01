const express = require('express');
const GitHubAPI = require('./apis/githubAPI'); 
const ClimaAPI = require('./apis/climaAPI'); 
const TipoCambioAPI = require('./apis/cambioAPI');
const PokemonAPI = require('./apis/pokeAPI');
const RyMAPI = require('./apis/rymAPI');

const app = express();
const port = 3000; 

const climaAPI = new ClimaAPI('8423488fb8acb3ede506b0d5e394bf77'); 
const tipoCambioAPI = new TipoCambioAPI();
const pokemonAPI = new PokemonAPI();
const rymAPI = new RyMAPI();

app.get('/github/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const gitHubAPI = new GitHubAPI(username); 
    const userData = await gitHubAPI.getUserData();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/weather/:location', async (req, res) => {
  const { location } = req.params;

  try {
    const weatherData = await climaAPI.getCountryWeather(location);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/tipo-cambio', async (req, res) => {
  try {
    const tipoCambioData = await tipoCambioAPI.getTipoCambio();
    res.json(tipoCambioData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener los datos del Pokémon
app.get('/pokemon/:pokemonName', async (req, res) => {
  const { pokemonName } = req.params;

  try {
    const pokemonData = await pokemonAPI.getPokemonData(pokemonName);
    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener los movimientos del Pokémon
app.get('/pokemon/:pokemonName/moves', async (req, res) => {
  const { pokemonName } = req.params;

  try {
    const pokemonMoves = await pokemonAPI.getPokemonMoves(pokemonName);
    res.json(pokemonMoves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener los personajes de Rick and Morty
app.get('/rick-and-morty/characters', async (req, res) => {
  try {
    const characters = await rymAPI.getPersonajes();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const CocktailAPI = require('./apis/cocktailAPI');

const cocktailAPI = new CocktailAPI();

app.get('/random-cocktail', async (req, res) => {
  try {
    const randomCocktail = await cocktailAPI.getRandomCocktail();
    res.json(randomCocktail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const FakeStoreAPI = require('./apis/storeAPI');

const fakeStoreAPI = new FakeStoreAPI();

app.get('/products', async (req, res) => {
  try {
    const products = await fakeStoreAPI.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PexelsAPI = require('./apis/imagenAPI');

const pexelsAPI = new PexelsAPI('DBAEds2KyTkAsKQuyzhfawHJ7GrbcM2BPlnGVYuQRBivam7Dw33LS5SZ');

app.get('/images/:query/:size', async (req, res) => {
  const { query, size } = req.params;
  try {
    const imageUrl = await pexelsAPI.searchImages(query, size);
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const RandomUserAPI = require('./apis/randomAPI');


const randomUserAPI = new RandomUserAPI();

app.get('/randomuser', async (req, res) => {
  try {
    const userData = await randomUserAPI.getRandomUser();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const MovieDBAPI = require('./apis/moviesAPI');

const movieDBAPI = new MovieDBAPI('3e042225f43a0dd15d484caf05b1f82c');

app.get('/topmovies', async (req, res) => {
  try {
    const topMovies = await movieDBAPI.getTopMovies();
    res.json(topMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/moviedetails/:movieId', async (req, res) => {
  const { movieId } = req.params;
  try {
    const movieDetails = await movieDBAPI.getMovieDetails(movieId);
    res.json(movieDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const MarsRoverAPI = require('./apis/nasaAPI');

const marsRoverAPI = new MarsRoverAPI();

app.get('/roverphotos/:sol', async (req, res) => {
  const { sol } = req.params;
  try {
    const roverPhotos = await marsRoverAPI.getRoverPhotos(sol);
    res.json(roverPhotos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/roverweather', async (req, res) => {
  try {
    const roverWeather = await marsRoverAPI.getRoverWeather();
    res.json(roverWeather);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Servidor web iniciado en el puerto ${port}`);
});


