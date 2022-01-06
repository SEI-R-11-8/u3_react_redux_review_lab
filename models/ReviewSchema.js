const { Schema } = require('mongoose');

const ReviewSchema = new Schema(
    {
        author: { type: String, required: true },
        content: { type: String, required: true },
        rating: { type: Number, required: true },
        likes: { type: Number, required: true },
        post: { type: Schema.Types.ObjectId, ref: 'posts' }
    },
    { timestamps: true }
);

module.exports = ReviewSchema;