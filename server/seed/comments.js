const { header } = require('express/lib/request');
const db = require('../db');
const { Comment, Location } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const sanDiego = await Location.findOne({ city: 'San Diego' });
  const paris = await Location.findOne({ city: 'Paris' });
  const london = await Location.findOne({ city: 'London' });
  const heidelberg = await Location.findOne({ city: 'Heidelberg' });
  const antigua = await Location.findOne({ city: 'Antigua' });
  const tamarindo = await Location.findOne({ city: 'Tamarindo' });
  const tokyo = await Location.findOne({ city: 'Tokyo' });
  const harare = await Location.findOne({ city: 'Harare' });
  const sydney = await Location.findOne({ city: 'Sydney' });
  const instanbul = await Location.findOne({ city: 'Istanbul' });

  const comments = [
    {
      location: sanDiego,
      username: 'BenjaminoBambino',
      comment: 'I love San Diego! One of my favorite cities in the world!',
      likes: 0
    },
    {
      location: paris,
      username: 'ParisH8er',
      comment: 'Paris stinks. Literally, it smells bad.',
      likes: 0
    },
    {
      location: london,
      username: 'Anglophile1066',
      comment:
        "Find a local pub, enjoy some bangers and mash with a decent pint, and you've got yourself a golden London experience.",
      likes: 0
    },
    {
      location: heidelberg,
      username: 'TravelMeister88',
      comment: 'Be sure to visit the university!',
      likes: 0
    },
    {
      location: antigua,
      username: 'Qu30nd@V0s',
      comment:
        'This is a beautiful historic city! Best Spanish language schools in the world!',
      likes: 0
    },
    {
      location: tamarindo,
      username: 'PuraVida48',
      comment: 'One of many beautiful Costa Rican destinations. Pura vida!',
      likes: 0
    },
    {
      location: tokyo,
      username: 'MrBaseball',
      comment: 'Always wanted to visit here!',
      likes: 0
    },
    {
      location: harare,
      username: 'Tatenda4ever!',
      comment: "You gotta eat some sadza while you're here.",
      likes: 0
    },
    {
      location: heidelberg,
      username: 'TravelMeister88',
      comment: 'Be sure to visit the university!',
      likes: 0
    },
    {
      location: sydney,
      username: 'TrvlDwnUndr',
      comment: 'Watch out for the flying wombats!',
      likes: 0
    },
    {
      location: instanbul,
      username: 'TurkishDLight',
      comment: "Some of the world's nicest people!",
      likes: 0
    }
  ];

  await Comment.insertMany(comments);
  console.log('Created comments with locations!');
};

const run = async () => {
  await main();
  db.close();
};

run();
