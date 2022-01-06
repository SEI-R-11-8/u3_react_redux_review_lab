const express = require('express');
const db = require('./db');
const cors = require('cors');
const routes = require('./routes/location');
const PORT = 3001;
const app = express();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/location', routes);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
