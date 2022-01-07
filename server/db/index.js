const mongoose = require('mongoose');

mongoose
	.connect(
		`mongodb+srv://jerome:generalassembly118@cluster0.wuv3l.mongodb.net/traveldestinations?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('Successfully connected to MongoDB.');
	})
	.catch((e) => {
		console.error('Connection error', e.message);
	});
mongoose.set('debug', true);
const db = mongoose.connection;

module.exports = db;
