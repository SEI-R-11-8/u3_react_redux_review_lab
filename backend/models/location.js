const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    comments: { type: String, required: true },
    posts: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('locations', Location);
