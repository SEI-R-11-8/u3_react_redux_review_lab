const mongoose = require('mongoose')

const Review = require('./reviews')
const Post = require('./posts')


const Reviews = mongoose.model('reviews', Review)
const Posts = mongoose.model('posts', Post)

module.exports = {
   Reviews,
   Posts
}