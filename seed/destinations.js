const db = require('../db');
const { Destination } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const main = async () => {
  const destinations = [
    {
      city: 'Tokyo',
      country: 'Japan',
      img: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8&w=1000&q=80',
        'https://media.istockphoto.com/photos/mt-fuji-and-tokyo-skyline-picture-id904453184?b=1&k=20&m=904453184&s=170667a&w=0&h=rwzxuUV5F3Sr8qm9eqE09ZrknCIGe2ZgKmyxo2fIDgo='
      ],
      desc: `Explore Tokyo’s historical sites, romantic places and some of the other unique places that make this city so special.
      Check out our Tokyo tourism guide, complete to find our recommendations for famous places and must-visit locations.
      From historical sites to the Tokyo of the future, there is lots to see and do.`
    },
    {
      city: 'Beijing',
      country: 'China',
      img: [
        'https://www.planetware.com/wpimages/2020/01/china-in-pictures-beautiful-places-to-photograph-the-great-wall.jpg',
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5df7fb014e2917000783339f%2FChina-is-projected-to-surpass-the-U-S--as-the-world-s-largest-economy-in-the-next%2F960x0.jpg%3Ffit%3Dscale'
      ],
      desc: `Ever since the world first discovered China through the writings of adventurer Marco Polo more than 700 years ago, this large Asian country has come to be regarded as the embodiment of all that is mysterious and exotic. Even now, after decades of economic growth, this vast country has lost none of its fascination. Indeed, the contrast between China's ancient customs and the new ultra-modern state that is developing has only increased the fascination with a culture that dates back many millennia.
      It's a culture that is much celebrated by the Chinese themselves, as evidenced by the preservation of such important historic sites as the Forbidden City and the Summer Palace in Beijing, each recalling the days of China's emperors. And then, of course, there's the famous Great Wall, winding for 6,700 kilometers all the way from the Yellow Sea to Central Asia, while its countless shrines exude the spirit of age-old Eastern religions.
      Thanks to its size, China as a tourist destination offers limitless scope for exploration. Whether you choose to travel aboard a luxury cruise ship through the picturesque Yangtze gorges, visit a bustling city, or seek out the tranquility of an ancient temple, this country is full of incredible experiences and sightseeing possibilities.
      Discover fascinating, unusual, and adventurous things to do with our list of the top tourist attractions in China.`
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
