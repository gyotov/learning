const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
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

app.listen(3000, () => {
  console.log('Server is on up on port 3000.');
});
