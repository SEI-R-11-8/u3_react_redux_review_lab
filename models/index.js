const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const location = require ('./location')
const review = require( './review')

const locationModel = mongoose.model('Location', location)

const reviewModel = mongoose.model('Review', review)

module.exports= {locationModel, reviewModel}  