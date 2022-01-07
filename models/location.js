const { Schema } = require('mongoose');

const Location = new Schema(
  {
    city: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
  },
  { timestamps: true }
);

module.exports = Location;
