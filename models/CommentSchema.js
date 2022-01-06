const { Schema } = require('mongoose');

const CommentSchema = new Schema(
    {
        author: { type: String, required: true },
        content: { type: String, required: true },
        post: { type: Schema.Types.ObjectId, ref: 'posts' }
    },
    { timestamps: true }
);

module.exports = CommentSchema;