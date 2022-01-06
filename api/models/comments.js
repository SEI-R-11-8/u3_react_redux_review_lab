const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema(
    {
        comment_name: { type: String, required: true },
        comment_review: { type: String, required: true },
        post_id: [ { type: mongoose.Schema.Types.ObjectId, ref: 'posts' } ]

    },
    { timestamps: true },
)

module.exports = mongoose.model('comments', Comments)