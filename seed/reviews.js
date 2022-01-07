const db = require('../db');
const { Review, Destination } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const main = async () => {
  const tokyo = await Destination.find({ city: 'Tokyo' });
  const beijing = await Destination.find({ city: 'Beijing' });
  const bangkok = await Destination.find({ city: 'Bangkok' });
  const reviews = [
    {
      username: 'Naruto',
      destination_id: tokyo[0]._id,
      review:
        'With its futuristic skyscrapers, unrivaled food scene, and wild nightlife, Tokyo is a rush of pure adrenaline. This vast and multifaceted city is famously cutting edge, yet its ancient Buddhist temples, vintage teahouses, and peaceful gardens offer a serene escape — and a poignant reminder of the city’s long history. And for those who know where to look, Tokyo’s smaller pleasures (secret ramen spots, shopping alleys, chill record bars) are often hiding in plain sight'
    },
    {
      username: 'Ichigo',
      destination_id: tokyo[0]._id,
      review: `Tokyo is by far the cleanest city to which I have ever travelled. It is aso the largest and busiest city to which I have ever travelled. The amount of effort the people of Tokyo go to in order to ensure both sanity and sanitation is simply astounding.
      Sights one must visit while in Tokyo include Harajuku (shopping/fashion), Ueno (Ameyoko for cheap shopping / Ueno Park/zoo), Shibuya (area for young adults), and Shinjuku (nightlife / red light district).
      
      `
    },
    {
      username: 'Chan',
      destination_id: beijing[0]._id,
      review: `Welcome to a capital city whose story goes back at least 3,000 years. In Beijing, you'll find a wealth of history, both ancient (the Hall of Preserving Harmony, Summer Palace, Forbidden City) and more recent (Chairman Mao Memorial Hall, Tiananmen Square). For the best market experience, choose the Dirt Market over the touristy Silk Market. A visit to the Great Wall, the longest manmade structure in the world, is absolutely essential.`
    },
    {
      username: 'Jaa',
      destination_id: bangkok[0]._id,
      review: `An increasing of tourists visiting Bangkok each year has proven that Bangkok is always a popular city for tourists.

      For major tourist attractions in Bangkok, most of them are Historical sites or religious sites such as temples in Bangkok. There is beautiful architecture, wall painting and also important in History, such as Wat Phra Sri Rattanasamaram (Phra Kaew), Wat Phra Chetuphon Wimon Mangalaram (wat pho), wat arun Ratchawararam, Wat Sra Ket, and Phra Bor Banphot (Golden mountain), Wat Ratchanadda, Wat Traimit, Wat Benchamabophit, Wat Bowonniwet Vihara Suthasan, Wat Thep Wararam etc. 
      
      `
    },
    {
      username: 'Lee',
      destination_id: bangkok[0]._id,
      review: `There are also other interesting places such as palaces, museums, parks, as well as various Shopping centres in Bangkok. There are both chilling places like Chatuchak Weekend Market, Sampeng Market, Yaowarat and Phahurat night market or luxury level such as many leading department stores in all areas of Bangkok as well.`
    }
  ];
  await Review.insertMany(reviews);
  console.log('Reviews added to MongoDB');
};

const run = async () => {
  await main();
  db.close();
};

run();
