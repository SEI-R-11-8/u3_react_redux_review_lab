const { Schema } = require('mongoose');

const Location = new Schema(
  {
    city: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = Location;
