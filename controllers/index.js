// getAllLocations
// getAllReviews
// updateReview
// createReview
const { Location, Review } = require('../models');

const createReview = async (req, res) => {
  try {
    const { locationId } = req.params;
    const addedReview = (await Review.insertMany(req.body))[0];
    const location = await Location.findOne({ _id: locationId });
    location.reviews.push(addedReview._id);
    await location.save();

    return res.status(201).send(addedReview);
  } catch (error) {
    return res.status(500).send({ msg: 'failed' });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).send(reviews);
  } catch (error) {
    return res.status(500).send({ msg: 'failed' });
  }
};

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findOne({ _id: reviewId });
    review.author = req.body.author;
    review.content = req.body.content;
    review.recommends = req.body.recommends;
    await review.save();

    return res.status(200).send(review);
    // await Review.findByIdAndUpdate(
    //   reviewId,
    //   req.body,
    //   { new: true },
    //   (error, review) => {
    //     if (error) {
    //       return res.status(500).send({ msg: 'failed' });
    //     }

    //     return res.status(200).send(review);
    //   }
    // );
  } catch (error) {
    return res.status(500).send({ msg: 'failed' });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).send(locations);
  } catch (error) {
    return res.status(500).send({ msg: 'failed' });
  }
};

const getLocationById = async (req, res) => {
  try {
    const { locationId } = req.params;
    const location = await Location.findOne({ _id: locationId });
    await location.populate('reviews');
    return res.status(200).send(location);
  } catch (error) {
    return res.status(500).send({ msg: 'failed' });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  getAllLocations,
  getLocationById
};
