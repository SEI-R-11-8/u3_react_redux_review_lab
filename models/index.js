const mongoose = require('mongoose');
const PostSchema = require('./post')

const Post = mongoose.model('posts', PostSchema)

module.exports = {
  Post
}