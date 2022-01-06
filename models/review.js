const { Schema } = require('mongoose')

const Review = new Schema(
    {
        review: {type: String, required: true},
        destination: {type: Schema.Types.ObjectId, ref: 'destinations'}
    }
)

module.exports = Review