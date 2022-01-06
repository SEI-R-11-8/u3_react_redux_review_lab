const mongoose = require('mongoose');
// require('dotenv').config(); // Add this line

let dbUrl = 'mongodb://127.0.0.1:27017/travelDatabase';

mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });
mongoose.set('debug', true);
const db = mongoose.connection;

module.exports = db;
