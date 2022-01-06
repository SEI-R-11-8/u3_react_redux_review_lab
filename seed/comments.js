const db = require('../db')
const { Post, Comment } = require('../models')
const faker = require('faker')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const machuPicchu = await Post.find({ title: 'Machu Picchu' })
  const gizaPyramid = await Post.find({ title: 'Great Pyramid of Giza' })
  const christRedeemer = await Post.find({ title: 'Christ the Redeemer' })
  const colosseum = await Post.find({ title: 'Colosseum' })
  const stonehenge = await Post.find({ title: 'Stonehenge' })
  const tajMahal = await Post.find({ title: 'Taj Mahal' })
  const comments = [
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: machuPicchu[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: machuPicchu[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: machuPicchu[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: gizaPyramid[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: gizaPyramid[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: gizaPyramid[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: christRedeemer[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: christRedeemer[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: christRedeemer[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: colosseum[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: colosseum[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: colosseum[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: stonehenge[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: stonehenge[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: stonehenge[0]._id
    },
    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: tajMahal[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: tajMahal[0]._id
    },

    {
      name: faker.name.firstName(),
      text: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 5),
      id: tajMahal[0]._id
    },
  ]
  await Comment.insertMany(comments)
  console.log('Created comments')
};

const run = async () => {
  await main();
  db.close();
}

run();