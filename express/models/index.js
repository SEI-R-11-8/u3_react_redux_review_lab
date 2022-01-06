const mongoose = require('mongoose');
const CitySchema = require('./city');
const ReviewSchema = require('./review');

const City = mongoose.model('cities', CitySchema);
const Review = mongoose.model('reviews', ReviewSchema);

modules.exports = {
  City,
  Review
};
