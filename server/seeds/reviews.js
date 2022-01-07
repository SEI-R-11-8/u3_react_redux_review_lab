const db = require('../db');
const Destination = require('../models/destination');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const main = async () => {
	const seedReviews = [
		{
			name: 'Grant Menke',
			title: 'Los Angeles is the best',
			image:
				'https://media-exp1.licdn.com/dms/image/C5603AQGmr5tzUwS9Kg/profile-displayphoto-shrink_800_800/0/1638995274513?e=1646870400&v=beta&t=jMaxdNHQ3YZRWmGdODMTsp8VuhKNLQKAE0sZAeW_hPA',
			content: 'LA is the GOAT',
		},
	];
	await Review.insertMany(seedReviews);
	console.log('Created destination using seed/reviews.js');
};

const run = async () => {
	await main();
	db.close();
};

run();
