const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig.development)
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Venturenox Assessment App listening at http://localhost:${port}`);
});
