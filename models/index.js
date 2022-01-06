const mongoose = require("mongoose");
const CitySchema = require("./city");
const CommentSchema = require("./comment");
const ReviewSchema = require("./review");

const City = mongoose.model("cities", CitySchema);
const Comment = mongoose.model("comments", CommentSchema);
const Review = mongoose.model("reviews", ReviewSchema);

module.exports = {
  City,
  Comment,
  Review,
};
