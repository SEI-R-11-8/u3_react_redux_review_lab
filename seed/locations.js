const db = require('../db');
const { Location } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const locations = [
    {
      city: 'San Diego',
      country: 'USA',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Khwt5BTpiDMcfrpGUQ6SoAHaE7%26pid%3DApi&f=1',
      description: `San Diego is a city in the U.S. state of California on the coast of the Pacific Ocean and immediately adjacent to the Mexican border. With a 2020 population of 1,386,932, San Diego is the eighth most populous city in the United States and second most populous in California.`,
      likes: 0
    },
    {
      city: 'Paris',
      country: 'France',
      image:
        'https://en.parisinfo.com/practical-paris/info/guides/info-disruption-paris',
      description: `Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts.`,
      likes: 0
    },
    {
      city: 'London',
      country: 'England',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p-O09qVVMae2Fm5V-h9ijQHaE8%26pid%3DApi&f=1',
      description: `London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile estuary down to the North Sea, and has been a major settlement for two millennia.`,
      likes: 0
    },
    {
      city: 'Heidelberg',
      country: 'Germany',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Eshfzu_ELQP3l98ERaYGNQHaFj%26pid%3DApi&f=1',
      description: `Heidelberg is a university town in the German state of Baden-Württemberg, situated on the river Neckar in south-west Germany. In the 2016 census, its population was 159,914, of which roughly a quarter consisted of students. Located about 78 km south of Frankfurt, Heidelberg is the fifth-largest city in Baden-Württemberg.`,
      likes: 0
    },
    {
      city: 'Antigua',
      country: 'Guatemala',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vq9gDBxxsX41pEx3hDCGGQHaE7%26pid%3DApi&f=1',
      description: `Antigua Guatemala, commonly referred to as just Antigua or la Antigua, is a city in the central highlands of Guatemala known for its preserved Spanish Baroque-influenced architecture as well as a number of ruins of colonial churches. It served as the capital of the Kingdom of Guatemala.`,
      likes: 0
    },
    {
      city: 'Tamarindo',
      country: 'Costa Rica',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vq9gDBxxsX41pEx3hDCGGQHaE7%26pid%3DApi&f=1',
      description: `Tamarindo is a district of the Santa Cruz canton, in the Guanacaste province of Costa Rica, located on the Nicoya Peninsula. The town of Tamarindo is the largest developed beach town in Guanacaste. Main attractions in the area are surfing and eco-tourism.`,
      likes: 0
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mCJP704zN0fVy425rltxFgHaDL%26pid%3DApi&f=1',
      description: `Tokyo, historically known in the west as Tokio and officially the Tokyo Metropolis, is the capital, the largest city, and the most populous metropolitan area in the Greater Tokyo Area, the Kantō region, and Japan, as well as the most populous metropolitan area in the world and most populous prefecture of Japan.`,
      likes: 0
    },
    {
      city: 'Harare',
      country: 'Zimbabwe',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mnNDxV8VNn1WB5VbcmafBwHaEJ%26pid%3DApi&f=1',
      description: `Harare is the capital and most populous city of Zimbabwe. The city proper has an area of 960.6 km² and a population 2,123,132 in the 2012 census and an estimated 3,120,917 in its metropolitan area in 2019.`,
      likes: 0
    },
    {
      city: 'Sydney',
      country: 'Australia',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bf6Gesxd30NWqipDqWhU2wHaEK%26pid%3DApi&f=1',
      description: `Sydney is the capital city of the state of New South Wales, and the most populous city in Australia and Oceania. Located on Australia's east coast, the metropolis surrounds Port Jackson and extends about 70 km on its periphery towards the Blue Mountains to the west, Hawkesbury to the north, the Royal National Park to the south and Macarthur to the south-west.`,
      likes: 0
    },
    {
      city: 'Istanbul',
      country: 'Australia',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yNMIU4JBJGsPBvXJBY93mgHaEc%26pid%3DApi&f=1',
      description: `Istanbul, formerly known as Constantinople, is the largest city in Turkey and the country's economic, cultural and historic center. The city straddles the Bosporus strait, and lies in both Europe and Asia, with a population of over 15 million residents, comprising 19% of the population of Turkey.`,
      likes: 0
    }
  ];

  await Location.insertMany(locations);
  console.log('Created locations!');
};

const run = async () => {
  await main();
  db.close();
};

run();
