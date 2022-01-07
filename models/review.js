const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Review = new Schema(
  {
    post_id: { type: Schema.Types.ObjectId, ref: "Post"},
    reviewer: { type: String, required: true },
    comment: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Review", Review)