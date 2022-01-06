const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('reviews', Review);
