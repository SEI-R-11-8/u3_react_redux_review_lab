const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = new Schema(
  {
    locationName: { type: String, required: true },
    content: { type: String, required: true },
    address: { type: String, required: true },
    comments: { type: Array, required: true },
    likes: { type: Number, required: true },
    photoURL: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('locations', Location);
