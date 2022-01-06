const db = require('../db');
const { City } = require('../models/index');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db;

const mainSeed = async () => {
  const cities = [
    {
      name: 'Madrid',
      description: 'The capital of spain',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
      name: 'Barcelona',
      description: 'Home of the second best soccer team in Spain',
      url: 'https://img2.10bestmedia.com/Images/Photos/378847/GettyImages-1085317916_54_990x660.jpg'
    },
    {
      name: 'Sevilla',
      description: 'Capital of Andalucia',
      url: 'https://media.istockphoto.com/photos/spain-square-seville-spain-picture-id576913134?b=1&k=20&m=576913134&s=170667a&w=0&h=VV6teMG5K7n_qlpU9GXNJG-R6IRQMQto3kLxzcaZrUA='
    },
    {
      name: 'Granada',
      description: 'Home of one of the wonders of the world',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchQYPhiFDP3aaf78xZqdW8WtJAvjNKrkaKg&usqp=CAU'
    }
  ];

  await City.insertMany(cities);
  console.log('Created some banging cities!');
};
const run = async () => {
  await mainSeed();
  db.close();
};

run();
