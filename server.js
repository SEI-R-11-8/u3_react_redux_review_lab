const express = require('express');
const cors = require('cors');
const db = require('./db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));