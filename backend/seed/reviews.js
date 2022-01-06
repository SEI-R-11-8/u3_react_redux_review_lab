const db = require('../db');
const City = require('../models/city');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const madrid = await City.find({ name: 'Madrid' });
  const barcelona = await City.find({ name: 'Barcelona' });
  const granada = await City.find({ name: 'Granada' });
  const leon = await City.find({ name: 'Leon' });

  const reviews = [
    {
      review: 'I loved Madrid!',
      city_id: madrid[0]._id
    },
    {
      review: 'Barcelona was awesome!',
      city_id: barcelona[0]._id
    },
    {
      review: 'Amazing!',
      city_id: granada[0]._id
    },
    {
      review: 'So fun!',
      city_id: leon[0]._id
    }
  ];

  await Review.insertMany(reviews);
  console.log('Created reviews!');
};

const run = async () => {
  await main();
  db.close();
};

run();
