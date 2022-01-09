const { model } = require('mongoose');
const LocationSchema = require('./location');
const CommentSchema = require('./comment');

const Location = model('locations', LocationSchema);
const Comment = model('comments', CommentSchema);

module.exports = {
  Location,
  Comment
};
