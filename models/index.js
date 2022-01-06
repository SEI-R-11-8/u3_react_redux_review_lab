const mongoose = require('mongoose')
const CommentSchema = require('./comment')
const ReviewSchema = require('./review')
const DestinationSchema = require('./destination')

const Comment = mongoose.model('comments', CommentSchema)
const Review = mongoose.model('reviews', ReviewSchema)
const Destination = mongoose.model('destinations', DestinationSchema) 

module.exports = {
    Comment,
    Review,
    Destination,
}