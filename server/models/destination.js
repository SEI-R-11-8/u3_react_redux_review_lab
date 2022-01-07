const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Destination = new Schema(
	{
		destination: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
		content: { type: String, required: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('destination', Destination);
