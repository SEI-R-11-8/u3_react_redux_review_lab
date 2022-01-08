const Comment = require('../models/comment');
const Review = require('../models/review');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createReview = async (req, res) => {
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

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    return res.status(201).json({
      comment
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, review) => {
        if (err) {
          res.status(500);
          console.log(err);
        }
        if (!review) {
          res.status(500);
          console.log('No review found');
        }
        return res.status(200).json(review);
      }
    );
  } catch (error) {
    return res.status(500);
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
          console.log(err);
        }
        if (!comment) {
          res.status(500);
          console.log('No document found');
        }
        return res.status(200).json(comment);
      }
    );
  } catch (error) {
    return res.status(500);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Review deleted');
    }
    throw new ErrorEvent('Review not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Comment deleted');
    }
    throw new ErrorEvent('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCommentsByReview = async (req, res) => {
  const review_id = req.params.review_id;
  try {
    const comments = await Comment.find({ review_id: review_id });
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllReviews,
  createReview,
  getAllComments,
  createComment,
  updateComment,
  updateReview,
  deleteReview,
  deleteComment,
  getCommentsByReview
};
