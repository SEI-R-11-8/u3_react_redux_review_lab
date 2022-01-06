const db = require('../db');
const City = require('../models/city');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const cities = [
    {
      name: 'Madrid',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'Madrid is really popular as the capital of Spain.'
    },
    {
      name: 'Barcelona',
      url: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'Barcelona is fun with lots of night life.'
    },
    {
      name: 'Granada',
      url: 'https://images.unsplash.com/photo-1564740603199-5f56138c6679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'Granada is beautiful with great architecture.'
    },
    {
      name: 'Leon',
      url: 'https://images.unsplash.com/photo-1609517575088-ff9f3d80ea9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'Leon is a popular tourist site with many activities.'
    }
  ];

  await City.insertMany(cities);
  console.log('Created cities!');
};

const run = async () => {
  await main();
  db.close();
};
run();
