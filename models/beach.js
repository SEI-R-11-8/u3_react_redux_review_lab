const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Beach = new Schema(
  {
    beachName: { type: String, required: true },
    review: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    comments: { type: Array, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('beaches', Beach);
