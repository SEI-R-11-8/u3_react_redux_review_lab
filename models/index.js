const mongoose  = require('mongoose')
const PostSchema = require('./post')
const CommentSchema = require('./comment')

const Post = mongoose.model('posts', PostSchema)
const Comment = mongoose.model('comments', CommentSchema)

module.exports = {
  Post,
  Comment
}