const db = require('../db/index');
const Destination = require('../models/destination');

db.on('Error', console.error.bind(console, 'MongoDB connection error: '));

const main = async () => {
	const seedDestinations = [
		{
			destination: 'Los Angeles',
			city: 'Los Angeles',
			state: 'CA',
			country: 'USA',
			content: 'Los Angeles is the one the most expensive cities in America.',
		},
	];

	await Destination.insertMany(seedDestinations);
	console.log('Created destination using seed/destinations.js');
};

const run = async () => {
	await main();
	db.close();
};

run();
