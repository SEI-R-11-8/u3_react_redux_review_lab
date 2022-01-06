const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = require('./location');
const reviewSchema = require('./review');

const Location = mongoose.model('Location', locationSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Location,
  Review
};
