const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema({
  review: {type: String, required: true},
  content: {type: String, required: true},
  recommended: {type: Boolean, required: true}
}, {timestamps: true})

module.exports= Review