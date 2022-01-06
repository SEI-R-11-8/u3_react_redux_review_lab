const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const location = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, required: false, ref: 'Review' }]
  },
  { timesstamp: true }
);

module.exports = location;
