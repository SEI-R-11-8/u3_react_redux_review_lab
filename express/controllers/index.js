const City = require('../models/city');
const Review = require('../models/review');

const createCity = async (req, res) => {
  try {
    const city = await new City(req.body);
    await city.save();
    return res.status(201).json({
      city
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const createReview = async (req, res) => {
  try {
    console.log(req.body);
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({
      review
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    return res.status(200).json({ cities });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getCityById = async (req, res) => {
  try {
    const { _id } = req.params;
    const city = await City.findById(_id);
    if (city) {
      return res.status(200).json({ city });
    }
    return res.status(404).send(`City with the specified ID does not exists`);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getReviewById = async (req, res) => {
  try {
    const { _id } = req.params;
    const review = await Review.findById(_id);
    if (review) {
      return res.status(200).json({ review });
    }
    return res.status(404).send(`Review with the specified ID does not exists`);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getReviewByCityId = async (req, res) => {
  try {
    const { _id } = req.params;
    const review = await City.findById(_id);
    if (review) {
      return res.status(200).json({ review });
    }
    return res
      .status(404)
      .send(`Review with the specified city ID does not exists`);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const updateReview = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(req);
    await Review.findByIdAndUpdate(
      _id,
      req.body,
      { new: true },
      (err, review) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!experience) {
          res.status(500).send('Review not found!');
        }
        return res.status(200).json(review);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const updateCity = async (req, res) => {
  try {
    const { _id } = req.params;
    await City.findByIdAndUpdate(_id, req.body, { new: true }, (err, city) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!city) {
        res.status(500).send('City not found!');
      }
      return res.status(200).json(city);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteCity = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await City.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('City deleted');
    }
    throw new Error('City not found');
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Review.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Review deleted');
    }
    throw new Error('Review not found');
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

module.exports = {
  createCity,
  createReview,
  getAllCities,
  getAllReviews,
  getCityById,
  getReviewById,
  deleteCity,
  deleteReview,
  updateReview,
  updateCity,
  getReviewByCityId
};
