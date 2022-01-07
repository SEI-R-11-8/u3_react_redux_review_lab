const Location = require('../models/location');
const Comment = require('../models/comment');

const createLocation = async (req, res) => {
  try {
    const location = await new Location(req.body);
    await location.save();
    return res.status(201).json({
      location
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({ locations });
  } catch (error) {
    return res.status(500).send(error.mesage);
  }
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (location) {
      return res.status(200).json({ location });
    }
    return res.status(404).send('Location is not real');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateLocation = async (req, res) => {
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
          res.status(500).send('no porcelain throne found');
        }
        return res.status(200).json(location);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Location.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('exploded the outhouse');
    }
    throw new Error('no outhouse');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

////////////////////////////////////

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

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.mesage);
  }
};

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (comment) {
      return res.status(200).json({ comment });
    }
    return res.status(404).send('Comment is not real');
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
          res.status(500).send(err);
        }
        if (!comment) {
          res.status(500).send('no commments or friends found');
        }
        return res.status(200).json(comment);
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
      return res.status(200).send('quiet the haters');
    }
    throw new Error('no words');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
};
