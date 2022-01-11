const { Location, Comment } = require('../models');

// POST -->
const createLocation = async (req, res) => {
  try {
    const location = await new Location(req.body);
    await location.save();
    return res.status(201).json({ location });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    return res.status(201).json({ comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// GET -->
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({ locations });
  } catch (error) {
    return res.status(500).send(error.message);
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

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.find({ _id: id });
    if (location) {
      return res.status(200).json({ location });
    }
    return res.status(404).send('This ID does not match any location.');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCommentsByLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ location: id });
    if (comments) {
      return res.status(200).json({ comments });
    }
    return res.status(404).send('There are no comments for this location.');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// PUT -->
const updateLocation = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    await Location.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, location) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!location) {
          res.status(500).send('Location not found.');
        }
        return res.status(200).json(location);
      }
    );
  } catch (error) {
    console.log(error.message);
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
          res.status(500).send(err);
        }
        if (!comment) {
          res.status(500).send('Comment not found.');
        }
        return res.status(200).json(comment);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

// DELETE -->

module.exports = {
  createLocation,
  createComment,
  getAllLocations,
  getAllComments,
  getCommentsByLocation,
  getLocationById,
  updateLocation,
  updateComment
};
