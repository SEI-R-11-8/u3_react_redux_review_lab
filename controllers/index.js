const { Comment, Location } = require('../models');

const getLocationsById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const locations = await Location.findById(id);
    if (locations) {
      return res.status(200).json({ locations });
    }
    return res
      .status(200)
      .send('Location with the specified ID does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({ locations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateLocation = async (req, res) => {
  console.log('here is update');
  try {
    const { id } = req.params;

    await Location.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, location) => {
        if (err) {
          res.status(500);
          console.log(err);
        }
        if (!location) {
          res.status(200);
          console.log('Location not found!');
        }
        return res.status(200).json({ location });
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
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
    const comments = await new Comment(req.body);
    await comments.save();
    return res.status(201).json({
      comments
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCommentsById = async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const comments = await Comment.findById(id);
    if (comments) {
      return res.status(200).json({ comments });
    }
    return res
      .status(200)
      .send('Comment with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateComment = async (req, res) => {
  console.log('here is update');
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
          res.status(200);
          console.log('Comment not found!');
        }
        return res.status(200).json({ comment });
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Comment deleted');
    }
    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getLocationsById,
  getAllLocations,
  updateLocation,
  getAllComments,
  createComment,
  getCommentsById,
  updateComment,
  deleteComment
};
