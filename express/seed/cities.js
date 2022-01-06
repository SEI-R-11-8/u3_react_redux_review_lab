const db = require('../db');
const City = require('../models/city');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const cities = [
    {
      name: 'Madrid',
      url: 'https://static.onecms.io/wp-content/uploads/sites/28/2021/06/08/madrid-spain-MADRIDTG0621.jpg',
      description: 'Capitol of Spain'
    },
    {
      name: 'Barcelona',
      url: 'https://img2.10bestmedia.com/Images/Photos/378847/GettyImages-1085317916_54_990x660.jpg',
      description: 'Barcelona is a City in Spain'
    },
    {
      name: 'Granada',
      url: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg',
      description: 'A wonderful travel vacation area'
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
