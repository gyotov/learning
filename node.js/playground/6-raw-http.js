const https = require('https');

const url =
  'https://api.darksky.net/forecast/3bce2735d3b29a9e9a49115c62276332/37.42159,-122.0837?exclude=minutely,hourly,alerts,flags&lang=bg&units=si';

const request = https.request(url, response => {
  let data = '';

  response.on('data', chunk => {
    data += chunk.toString();
    console.log(chunk);
  });

  response.on('end', () => {
    const dataBody = JSON.parse(data);
    console.log(dataBody);
  });
});

request.on('error', error => {
  console.log('Error: ', error);
});

request.end();
