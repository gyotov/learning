const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/3bce2735d3b29a9e9a49115c62276332/${latitude},${longitude}?exclude=minutely,hourly,alerts,flags&lang=bg&units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location!', undefined);
    } else {
      const targetString = `${body.daily.data[0].summary} В момента е ${body.currently.temperature} градуса. Има ${body.currently.precipProbability}% вероятност за дъжд.`;

      callback(undefined, targetString);
    }
  });
};

module.exports = forecast;
