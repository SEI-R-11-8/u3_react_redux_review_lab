const { Schema } = require("mongoose");

const Comment = new Schema(
  {
    comment: { type: String, required: true },
    city_id: { type: Schema.Types.ObjectId, ref: "city_id" },
  },
  { timestamps: true }
);

module.exports = Comment;
