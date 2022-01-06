const { Schema } = require('mongoose');

const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        likes: { type: Number, required: true },
        article: { type: String, required: true },
        imgUrl: { type: String, required: false },
        reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews'}],
        comments: [{ type: Schema.Types.ObjectId, ref: 'comments'}]
    },
    { timestamps: true }
);

module.exports = PostSchema;