const db = require('../db');
const Location = require('../models/location');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const locations = [
    {
      locationName: 'WDS museum Outhouse',
      content: 'George Washington probably sat here',
      address: 'The Web-Deane-Stevens Museum',
      comments: [],
      likes: 0,
      photoURL:
        'https://www.newenglandhistoricalsociety.com/wp-content/uploads/2015/03/colonial-outhouses-silas-deane-1024x768.jpg'
    },
    {
      locationName: 'Row House OutHouse',
      content: 'different kind of backyard hangout',
      address: 'Cincinnati',
      comments: [],
      likes: 0,
      photoURL:
        'https://goodmorninggloucester.files.wordpress.com/2021/06/cincinnati-row-houses-with-outhouses_-library-of-congress-photography-collection.jpg'
    },
    {
      locationName: 'privy plant pre cast base',
      content: 'Thanks FDR',
      address: 'Missouri',
      comments: [],
      likes: 0,
      photoURL:
        'https://goodmorninggloucester.files.wordpress.com/2021/03/privy-plant-pre-cast-base_missouri-1938-lee-russell-photo-privy-wpa-fsa-library-of-congress-collection.jpg'
    },
    {
      locationName: 'Ureddplassen Rest Stop Outhouse',
      content: 'Sweden goes above and beyond',
      address: 'Ureddplassen, Sweden',
      comments: [],
      likes: 0,
      photoURL:
        'http://www.jldr.com/ohtour/wp-content/uploads/2018/04/SwedensCoolestOH-Copy-768x291.jpg'
    },
    {
      locationName: 'Oh No.',
      content: '@ story outhouses exist and i have never been more terrified',
      address: 'Wyoming, USA',
      comments: [],
      likes: 0,
      photoURL: 'http://jldr.com/rklein1.jpg'
    }
  ];
  await Location.insertMany(locations);
  console.log('Have a seat ;) ');
};
const run = async () => {
  await main();
  db.close();
};

run();
