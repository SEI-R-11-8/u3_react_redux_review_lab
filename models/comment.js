const { Schema } = require('mongoose');

const Comment = new Schema(
  {
    location: { type: Schema.Types.ObjectId, ref: 'locations' },
    username: { type: String, required: true },
    comment: { type: String, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = Comment;
