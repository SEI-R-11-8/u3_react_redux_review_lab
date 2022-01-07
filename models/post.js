const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        reviews: [ 
          { type: Schema.Types.ObjectId, ref: "Review" }
        ],
    },
    { timestamps: true },
)

module.exports = mongoose.model('Post', Post)