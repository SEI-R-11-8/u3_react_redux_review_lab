const { Schema } = require('mongoose')

const Comment = new Schema(
    {
        comment: {type: String, required: true},
        destination: {type: Schema.Types.ObjectId, ref: 'destinations'}
    }
)

module.exports = Comment