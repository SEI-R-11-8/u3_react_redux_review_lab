const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema(
    {
        post_location: { type: String, required: true },
        post_description: { type: String, required: true },
        post_image: { type: String, required: true },
        comment_id: [ { type: mongoose.Schema.Types.ObjectId, ref: 'comments' } ]
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Posts)