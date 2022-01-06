const mongoose = require('mongoose');
const LocationSchema = require('./location');
const ReviewSchema = require('./review');

const Location = mongoose.model('Location', LocationSchema);
const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
  Location,
  Review
};
