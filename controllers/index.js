const Beach = require('../models/beach');
const Comment = require('../models/comment');

const getAllBeaches = async (req, res) => {
  try {
    const beaches = await Beach.find();
    return res.status(200).json({ beaches });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBeachById = async (req, res) => {
  try {
    const { id } = req.params;
    const beach = await Beach.findById(id);
    if (beach) {
      return res.status(200).json({ beach });
    }
    return res.status(404).send('Beach with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createBeach = async (req, res) => {
  try {
    const beach = await new Beach(req.body);
    await beach.save();
    return res.status(201).json({
      beach
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBeach = async (req, res) => {
  try {
    const { id } = req.params;
    await Beach.findByIdAndUpdate(id, req.body, { new: true }, (err, beach) => {
      return res.status(200).json(beach);
    });
  } catch (error) {}
};

const deleteBeach = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Beach.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Beach deleted');
    }
    throw new Error('Beach not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllComments = async (req, res) => {
  try {
    const Comnment = await Comment.find();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (comment) {
      return res.status(200).json({ comment });
    }
    return res.status(404).send('Comment with the specified ID does not exist');
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

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comment) => {
        return res.status(200).json(comment);
      }
    );
  } catch (error) {}
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
  createBeach,
  getAllBeaches,
  getBeachById,
  updateBeach,
  deleteBeach,
  getAllComments,
  getCommentById,
  createComment,
  deleteComment,
  updateComment
};
