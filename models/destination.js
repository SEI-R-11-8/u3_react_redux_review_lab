const { Schema } = require('mongoose')

const Destination = new Schema(
    {
        name: {type: String, required: true},
        image: String,
        details: {type: String, required: true},
        comments: {type: Schema.Types.ObjectId, ref: 'comments'},
        review: {type: Schema.Types.ObjectId, ref: 'reviews'},
        likes: Number
    },
    {timestamps: true}
)

module.exports = Destination