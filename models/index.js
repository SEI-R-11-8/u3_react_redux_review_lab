const mongoose = require('mongoose');
const PostSchema = require('./PostSchema');
const CommentSchema = require('./CommentSchema');
const ReviewSchema = require('./ReviewSchema');

const PostColl = mongoose.model('posts', PostSchema);
const CommentColl = mongoose.model('comments', CommentSchema);
const ReviewColl = mongoose.model('reviews', ReviewSchema);

module.exports = {
    PostColl,
    CommentColl,
    ReviewColl
};