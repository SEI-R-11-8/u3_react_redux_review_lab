const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    beach_id: {
      type: Schema.Types.ObjectId,
      ref: 'beach_id'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('comments', Comment);
