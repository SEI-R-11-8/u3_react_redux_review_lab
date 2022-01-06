const db = require('../db');
const Beach = require('../models/beach');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedBeaches = async () => {
  const beaches = [
    {
      beachName: 'beach 1',
      review: 'review 1',
      address: 'address 1',
      image: 'image 1',
      comments: [],
      likes: 0
    },
    {
      beachName: 'beach 2',
      review: 'review 2',
      address: 'address 2',
      image: 'image 2',
      comments: [],
      likes: 0
    },
    {
      beachName: 'beach 3',
      review: 'review 3',
      address: 'address 3',
      image: 'image 3',
      comments: [],
      likes: 0
    }
  ];

  await Beach.insertMany(beaches);
  console.log('Created some beaches!');
};

const run = async () => {
  await seedBeaches();
  db.close();
};

run();
