const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema(
  {
    review: { type: String, required: true },
    city_id: { type: Schema.Types.ObjectId, ref: 'cities' }
  },
  { timestamps: true }
);

module.exports = City;
