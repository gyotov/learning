// Require Module
const request = require('request');

// Geocoding
// Addres -> Lat/Long -> Weather
const queryString = `https://api.mapbox.com/geocoding/v5/mapbox.places/varna%20bulgaria.json?access_token=pk.eyJ1IjoiZ3lvdG92IiwiYSI6ImNrMzM3dTlxbDBub3MzbHA5dTg0eG5maGwifQ.Xaf7Y6WLRv7NfixYhgYqDQ&limit=1&language=bg`;

// Weather
const url =
  'https://api.darksky.net/forecast/3bce2735d3b29a9e9a49115c62276332/43.2184,27.9124?exclude=minutely,hourly,alerts,flags&lang=bg&units=si';

request({ url: url, json: true }, (error, response) => {
  const targetString = `${response.body.daily.data[0].summary} В момента е ${response.body.currently.temperature} градуса. Има ${response.body.currently.precipProbability}% вероятност за дъжд.`;

  console.log(targetString);
});

// Geocoding
request({ url: queryString, json: true }, (error, response) => {
  const targetString = `Latitude: ${response.body.features[0].center[1]}, Longitude: ${
    response.body.features[0].center[0]
  }, ${response.body.features[0].place_name_bg}`;

  console.log(targetString);
});
