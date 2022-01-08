const { Schema } = require('mongoose');

const CommentSchema = new Schema(
  {
    comment:  String
  },
  { timestamps: true }
);

module.exports = CommentSchema;