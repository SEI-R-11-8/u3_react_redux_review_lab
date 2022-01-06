const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = City;
