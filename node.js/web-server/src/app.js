// Modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars.js engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Joro'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Joro'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Joro',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repudiandae sunt aspernatur veritatis amet, consectetur tenetur recusandae nobis illo dolorum ut nemo nostrum sequi soluta eius, similique autem harum eos.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Mostly cloudly.',
    location: 'Varna, Bulgaria'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 - Help',
    name: 'Joro',
    errorMessage: 'Help article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Joro',
    errorMessage: 'Page not found'
  });
});

app.listen(3000, () => {
  console.log('Server is on up on port 3000.');
});
