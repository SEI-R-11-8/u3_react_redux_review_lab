const db = require('../db');
const { Location, Review } = require('../models');

const reviewSeed = async () => {
  const lasVegasReviews = [
    {
      author: 'Marvele',
      content: 'I know nothing',
      recommends: true
    }
  ];
  const addedLasVegasReviews = await Review.insertMany(lasVegasReviews);
  const chattanoogaReviews = [
    {
      author: 'Joseph',
      content: 'They have good wifi',
      recommends: true
    }
  ];
  const addedChattanoogaReviews = await Review.insertMany(chattanoogaReviews);

  const timesSquareReviews = [
    {
      author: 'Chris',
      content: 'Hard to walk around',
      recommends: true
    }
  ];
  const addedTimesSquareReviews = await Review.insertMany(timesSquareReviews);

  const lasVegas = await Location.findOne({ name: 'Las Vegas' });
  lasVegas.reviews = addedLasVegasReviews;
  await lasVegas.save();

  const chattanooga = await Location.findOne({ name: 'Chattanooga' });
  chattanooga.reviews = addedChattanoogaReviews;
  await chattanooga.save();

  const timesSquare = await Location.findOne({ name: 'Times Square' });
  timesSquare.reviews = addedTimesSquareReviews;
  await timesSquare.save();
};

reviewSeed();
