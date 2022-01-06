const { Schema } = require('mongoose');

const ReviewSchema = new Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    recommends: { type: Boolean, required: true }
  },
  { timestamps: true }
);

module.exports = ReviewSchema;
