const db = require('../db');
const Location = require('../models/location');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const locations = [
    {
      name: 'Miami',
      description: 'Party City',
      comments: 'Fun place to be',
      posts: 'Super warm',
      image:
        'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'New York City',
      description: 'The City that never sleeps',
      comments: 'Always something to do',
      posts: 'Great for shows',
      image:
        'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80'
    },
    {
      name: 'Chicago',
      description: 'The windy city',
      comments: 'Super cold',
      posts: 'Almost got blown away',
      image:
        'https://images.unsplash.com/photo-1597931166395-88ebf407a050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },
    {
      name: 'New Orleans',
      description: 'Party city',
      comments: 'Mardigra was a lot of fun',
      posts: 'They celebrate everthing',
      image:
        'https://images.unsplash.com/photo-1568693059993-a239b9cd4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }
  ];

  await Location.insertMany(locations);
  console.log('Created some locations!');
};
const run = async () => {
  await main();
  db.close();
};

run();
