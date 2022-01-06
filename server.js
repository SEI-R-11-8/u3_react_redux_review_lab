const express = require('express');
const cors = require('cors');
const db = require('./db');
const { homeRoute, postRoute, reviewFormRoute } = require('./back-end-routes/');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/home', homeRoute);
app.use('/api/post', postRoute);
app.use('/api/reviewform', reviewFormRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));