const db = require('../db');
const Comment = require('../models/comments');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const comments = [
    {
      username: 'Tangerine',
      reference: '2777 Iris Ave, Boulder, Colorado, 80304',
      details: 'hello'
    },
    {
      username: "Foolish Craig's Cafe",
      reference: '1611 Pearl St, Boulder, CO 80302',
      details: 'hello'
    },
    {
      username: "Lucile's Creole Cafe",
      reference: '2124 14th St, Boulder, CO 80302',
      details: 'hello'
    }
  ];
  await Comment.insertMany(comments);
  console.log('Comments Created!');
};
const run = async () => {
  await main();
  db.close();
};

run();
