const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/api', routes);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
