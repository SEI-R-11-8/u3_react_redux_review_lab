const db = require('../db')
const { Location, Review } = require('../models')

const reviewSeed = async() => {
  const lasVegasReviews = [
    {
      author: 'Marvel',
      content: 'I know nothing about this city.',
      reccomends: true
    }
  ]
  const addedLasVegasReviews = await Review.insertMany(lasVegasReviews)

  const chattanoogaReviews = [
    {
      author: 'Joseph',
      content: 'They have fast internet.',
      reccomends: true
    }
  ]
  const addedChattanoogaReviews = await Review.insertMany(chattanoogaReviews)

  const timesSquareReviews = [
    {
      author: 'Chris',
      content: 'Hard to walk around.',
      reccomends: true
    }
  ]
const addedTimesSquareReviews = await Review.insertMany(timesSquare)

const lasVegas = await Location.find({ name: 'Las Vegas'})
lasVegas.reviews= addedlasVegasReviews
await lasVegas.save()

const chattanooga = await Location.find({ name: 'Chattanooga'})
chattanooga.reviews= addedchattanoogaReviews
await chattanooga.save()

const timesSquare = await Location.find({ name: 'Times Square'})
timesSquare.reviews= addedtimesSquareReviews
await timesSquare.save()

}

reviewSeed()