const { Destination, Review } = require('../models');

const getAllDestinations = async (req, res) => {
  try {
    const destination = await Destination.find({});
    return res.status(201).json({
      destination
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findOne({
      _id: `${req.params.id}`
    });
    return res.status(201).json({
      destination
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find({});
    return res.status(201).json({
      review
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postReview = async (req, res) => {
  try {
    const review = await new Review(req.body);

    await review.save();
    return res.status(201).json({
      review
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDestinations,
  getAllReviews,
  getDestinationById,
  postReview
};
