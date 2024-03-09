// const apiKey = '5812b8ca02msh3ef986fa070754ap14f7e9jsnf0849e0597b2';
// const apiHost = 'the-weather-api.p.rapidapi.com';
// const apiUrl = `https://the-weather-api.p.rapidapi.com/api/weather/lima?X-RapidAPI-Key=${apiKey}&X-RapidAPI-Host=${apiHost}`;

// fetch("https://the-weather-api.p.rapidapi.com/api/weather/lima", {
//   "method": "GET",
//   "headers": {
//     "X-RapidAPI-Host": "the-weather-api.p.rapidapi.com",
//     "X-RapidAPI-Key": "5812b8ca02msh3ef986fa070754ap14f7e9jsnf0849e0597b2"
//   }
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.log(err);
// });

const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "5812b8ca02msh3ef986fa070754ap14f7e9jsnf0849e0597b2");
myHeaders.append("X-RapidAPI-Host", "moviesdatabase.p.rapidapi.com");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://moviesdatabase.p.rapidapi.com/titles/series/tt1563280", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));