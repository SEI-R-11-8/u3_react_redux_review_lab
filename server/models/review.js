const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
	{
		name: { type: String, required: false },
		review_id: { type: Schema.Types.ObjectId, ref: 'reviews' },
		title: { type: String, required: true },
		image: { type: String, required: false },
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('reviews', Review);
