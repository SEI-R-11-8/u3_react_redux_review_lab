const { model } = require('mongoose')
const { Location, Review } = require('../models')

const createReview = async (req, res) => { 
  try {
    const review = await Review.insertMany(req.body)
    return res.status(201).send({ msg: 'success'})
  } catch (error) {
    return res.status(500).send({ msg: 'failed'})
  }
}

const getAllReviews = async (req, res) => { 
  try {
    const reviews = await Review.find() 
    return res.status(201).send({ msg: 'success'})
  } catch (error) {
    return res.status(500).send({ msg: 'failed'})
  }
}

const updateReview = async (req, res) => { 
  try {
    const { reviewId } = req.params
    await Review.findbyIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, review) => {
        if (err) {
        res.status(500).send({msg: 'failed'})
      }
      return res.status(200).send(review)
    })
  } catch (error) {
    return res.status(500).send({ msg: 'failed'})
  }
}

const getAllLocations = async (req, res) => { 
  try {
    const locations = await Location.find()
    return res.status(200).send(locations)
  } catch (error) {
    return res.status(500).send({ msg: 'failed'})
  }
}

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  getAllLocations,
}