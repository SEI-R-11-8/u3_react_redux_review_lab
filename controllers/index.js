const { City, Comment, Review } = require("../models/index");

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    return res.status(200).json({ cities });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/////////////

const postComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    return res.status(201).json({ comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comment) => {
        if (err) {
          res.status(500);
        }
        if (!comment) {
          res.status(500);
        }
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Comment deleted");
    }
    throw new Error("Comment not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

////////////////////

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const postReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({ review });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCities,
  getAllComments,
  getAllReviews,
  postReview,
  postComment,
  updateComment,
  deleteComment,
};
