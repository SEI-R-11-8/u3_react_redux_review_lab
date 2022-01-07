const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routes = require('../routes');
const db = require('../db');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/', routes);
app.post('/', (req, res) => {
	res.send('This is from db/server/js');
});

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
