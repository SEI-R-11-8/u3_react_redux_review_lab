const { Post, Comment } = require('../models')

// POST
const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// GET

const getPostbyId = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate({path: 'comments', model: Comment})
    return res.status(200).json({post})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate({path: 'comments', model: Comment})
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// PUT

const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    await Post.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, post) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!post) {
        res.status(200).send('Post not found!')
      }
      return res.status(200).json(post)
    }).clone()
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    await Comment.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, comment) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!comment) {
        res.status(200).send('Comment not found!')
      }
      return res.status(200).json(comment)
    }).clone()
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPost,
  createComment,
  getAllPosts,
  getPostbyId,
  updatePost,
  updateComment
}
