const db = require('../db');
const { Destination } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const main = async () => {
  const destinations = [
    {
      city: 'Tokyo',
      coutry: 'Japan',
      img: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8&w=1000&q=80',
        'https://media.istockphoto.com/photos/mt-fuji-and-tokyo-skyline-picture-id904453184?b=1&k=20&m=904453184&s=170667a&w=0&h=rwzxuUV5F3Sr8qm9eqE09ZrknCIGe2ZgKmyxo2fIDgo='
      ],
      desc: `Explore Tokyo’s historical sites, romantic places and some of the other unique places that make this city so special.
      Check out our Tokyo tourism guide, complete to find our recommendations for famous places and must-visit locations.
      From historical sites to the Tokyo of the future, there is lots to see and do.`
    }
  ];
  await Destination.insertMany(destinations);
  console.log('Destinations added to MongoDB');
};

const run = async () => {
  await main();
  db.close();
};

run();
