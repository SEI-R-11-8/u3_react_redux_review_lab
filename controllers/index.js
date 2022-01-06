const { Post, Comment } = require('../models')

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    return res.status(201).json({
      allPosts
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getOneComment = async (req, res) => {
  try {
    const comment = await Comment.find({ _id: req.params.id });
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ id: req.params.id });
    return res.status(201).json({
      comments
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const comments = await Comment.findOneAndDelete({ _id: req.params.id });
    return res.status(201).json({})
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const postComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.param.id, req.body, { new: true })
    return res.status(201).json({})
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllPosts,
  getComments,
  deleteComment,
  postComment,
  updateComment,
  getOneComment
}