const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Destination = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        review: [{ type: Schema.Types.ObjectId, ref: 'destinations' }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('destinations', Destination);
