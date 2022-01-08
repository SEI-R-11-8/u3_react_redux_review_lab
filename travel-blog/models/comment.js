const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    review_id: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('comments', Comment);
