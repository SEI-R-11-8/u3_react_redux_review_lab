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

module.exports = {
  getAllPosts
}