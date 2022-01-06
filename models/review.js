const { Schema } = require("mongoose");

const Review = new Schema(
  {
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    city_id: { type: Schema.Types.ObjectId, ref: "city_id" },
  },
  { timestamps: true }
);

module.exports = Review;
