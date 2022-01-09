const { Schema } = require('mongoose')

const Destination = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: {type: String, required: true},
        image: String,
        details: {type: String, required: true},
        comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
        review: [{type: Schema.Types.ObjectId, ref: 'Review'}],
        likes: Number
    },
    {timestamps: true}
)

module.exports = Destination