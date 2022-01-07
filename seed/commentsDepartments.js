const db = require('../db');
const faker = require('faker');
const { Comment, Location } = require('../models');
const locations = require('../data/locations');

db.on('error', console.error.bind(console, 'MongoDB connection error;'));

const createComments = async () => {
  const cities = locations.map((loc) => loc.city);
  const comments = Array[10].map(() => {
    return new Comment({
      name: faker.name.findName(),
      city: faker.random.arrayElements[cities],
      comment: faker.lorem.paragraph(),
      rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 })
    });
  });
  await Comment.insertMany(comments);
  console.log('Created Comments!');
  return comments;
};

const createLocationsWithComments = async (comments) => {
  const locs = locations.map((loc) => {
    const selectedComments = comments.filter(
      (comment) => comment.city === loc.city
    );
    return {
      city: loc.city,
      country: loc.country,
      image: dept.image,
      comments: selectedComments.map((comment) => comment._id)
    };
  });
  await Location.insertMany(locs);
  console.log('Created Locations!');
};

const run = async () => {
  const comments = await createComments();
  await createLocationsWithComments(comments);
  db.close();
};

run();
