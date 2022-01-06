const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema (
  {
    city: { type: String, required: true},
    date: { type: String, required: true},
    description: {type: String, required: true},
    likes: { type: Number, required: true},
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment'}],
    photo: { type: String }
  },
  { timestamps: true}
)

module.exports = Post