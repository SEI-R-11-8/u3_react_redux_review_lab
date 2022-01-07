const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        comment: {type: String, required: true},
        // comment: {type: String},
        // rating: {type: String, required: true},
        post_id: {type: Schema.Types.ObjectId, ref: 'posts'}
    },
    { timestamps: true },
)

module.exports = mongoose.model('comments', Comment)