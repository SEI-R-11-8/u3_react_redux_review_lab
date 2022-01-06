const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    review: { type: String, required: true },
    city_id: { type: Schema.Types.ObjectId, ref: 'cities' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('reviews', Review);
