const mongoose = require('mongoose')

const Comment = new mongoose.Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, required: true },
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'posts' },
  },
  { timestamps: true }
)

module.exports = Comment;