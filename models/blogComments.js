const { Schema } = require('mongoose');

const CommentSchema = new Schema(
  {
    comment: { type: String}
  },
  { timestamps: true }
);

module.exports = CommentSchema;