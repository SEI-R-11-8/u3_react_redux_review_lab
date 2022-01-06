const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: { type: String, unique: true, required: true, dropDups: true },
    post_body: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
  },
  { timestamps: true }
)

const commentSchema = new Schema(
  {
    name: String,
    comment_body: String,
  },
  { timestamps: true }
)

const Post = mongoose.model('posts', postSchema)
const Comment = mongoose.model('comments', commentSchema)

module.exports = {
  Post,
  Comment
}
