const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    locationName: { type: String, required: true },
    content: { type: String, required: true },
    address: { type: String, required: true },
    likes: { type: Number, required: true },
    photoUrl: { type: String, required: true },
    comments: { type: Array, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('reviews', Review);
