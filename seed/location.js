const db = require('../db');
const { Location } = require('../models');

const locationSeed = async () => {
  const locations = [
    {
      name: 'Las Vegas',
      image:
        'http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      description: 'Sin city',
      location: 'Nevada'
    },
    {
      name: 'Chattanooga',
      image:
        'https://www.tnvacation.com/sites/default/files/article/CoolidgeParkHeroImage.jpg',
      description: 'Scenic city',
      location: 'Tennessee'
    },
    {
      name: 'Times Square',
      image:
        'https://media.istockphoto.com/photos/times-square-in-new-york-city-picture-id523513953',
      description: 'City that never sleeps',
      location: 'New York'
    }
  ];

  await Location.insertMany(locations);
};

locationSeed();
