const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Post = new mongoose.Schema(
   {
      review_id: { type: Schema.Types.ObjectID, ref: 'Review' },
      title: { type: String, required: true },
      author: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: Date, required: true }
   },
   { timestamps: true }
)

module.exports = Post;