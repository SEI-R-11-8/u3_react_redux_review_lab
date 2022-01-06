const mongoose = require('mongoose');
const DestinationSchema = require('./destination');
const ReviewSchema = require('./review');

const Destination = mongoose.model('destinations', DestinationSchema);
const Review = mongoose.model('reviews', ReviewSchema);

module.exports = {
  Destination,
  Review
};
