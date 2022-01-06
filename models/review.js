const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    recommends: { type: Boolean, required: true }
  },
  { timesstamp: true }
);
module.exports = Review;
