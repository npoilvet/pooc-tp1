const express = require('express');

const app = express();

const port = 3000;


const os = require("os");
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'))
app.get('/', (request, response) => {
  response.render('index');
})

app.get('/hello/:name', (request, response) => {
  response.render('hello', {name: request.params.name});
})
app.get('/pooc', (request, response) => {
  response.render('pooc');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Erreur du serveur : ', err)
  }

  console.log('Le serveur écoute sur le port '+port+'\nRendez vous sur http://'+os.hostname()+'.local:'+port);
})

