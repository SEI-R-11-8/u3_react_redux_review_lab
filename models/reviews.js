const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Review = new mongoose.Schema(
   {

      title: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: Date, required: true },
      rating: { type: String, required: true },
      post_id: [
         { type: Schema.Types.ObjectId, ref: 'Post' }
      ]
   },
   { timestamps: true }
)

module.exports = Review;