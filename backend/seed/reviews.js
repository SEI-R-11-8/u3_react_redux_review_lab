const db = require('../db');
const { City } = require('../models/index');
const { Review } = require('../models/index');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db;

const mainSeed = async () => {
  const madrid = await City.find({ name: 'Madrid' });
  const barcelona = await City.find({ name: 'Barcelona' });
  const sevilla = await City.find({ name: 'Sevilla' });
  const granada = await City.find({ name: 'Granada' });
  const reviews = [
    {
      review: 'I love Madrid',
      city_id: madrid[0]._id
    },
    {
      review: 'Barcelona is not as great as Madrid',
      city_id: barcelona[0]._id
    },
    {
      review: 'What a beatiful place',
      city_id: granada[0]._id
    },
    {
      review: 'Honestly had the best paella',
      city_id: sevilla[0]._id
    }
  ];

  await Review.insertMany(reviews);
  console.log('Created some banging Reviews!');
};
const run = async () => {
  await mainSeed();
  db.close();
};

run();
