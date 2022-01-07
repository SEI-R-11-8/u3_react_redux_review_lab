const mongoose = require('mongoose');

const BlogSchema = require('./blogPost')
const CommentSchema = require('./blogComments')


const Blog = mongoose.model('Blog', BlogSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports={
    Blog,
    Comment
}