const db = require('../db');
const { Review, Destination } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const main = async () => {
  const tokyo = await Destination.find({ city: 'Tokyo' });
  const reviews = [
    {
      username: 'Naruto',
      destination_id: tokyo[0]._id,
      review: 'dummy review'
    },
    {
      username: 'Ichigo',
      destination_id: tokyo[0]._id,
      review: 'Dummy review from ichigo'
    }
  ];
  await Review.insertMany(reviews);
  console.log('Reviews added to MongoDB');
};

const run = async () => {
  await main();
  db.close();
};

run();
