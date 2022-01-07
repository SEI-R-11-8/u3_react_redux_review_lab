const { model } = require('mongoose');
const CommentSchema = require('./comment');
const LocationSchema = require('./location');

const Comment = model('comments', CommentSchema);
const Location = model('locations', LocationSchema);

module.exports = {
  Comment,
  Location
};
