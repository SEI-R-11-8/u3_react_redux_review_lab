const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    username: { type: String, required: true },
    details: { type: String, required: true },
    reference: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('comments', Comment);
