const mongoose = require('mongoose')
const CommentSchema = require('./comment')
const ReviewSchema = require('./review')
const DestinationSchema = require('./destination')

const Comment = mongoose.model('Comment', CommentSchema)
const Review = mongoose.model('Review', ReviewSchema)
const Destination = mongoose.model('Destination', DestinationSchema) 

module.exports = {
    Comment,
    Review,
    Destination,
}