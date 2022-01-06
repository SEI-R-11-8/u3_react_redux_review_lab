const { Post, Comment } = require('../models/')


///////// GET /////////

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    return res.status(200).json({ posts })
  }
  catch (error) {
    return res.sendStatus(500).send(error.message)
  }
}

const getPost = async (req, res) => {
  try {
    const id = req.params.id
    const post = await Post.findById(id).populate('comments')
    return res.status(200).json({ post })
  }
  catch (error) {
    return res.sendStatus(500).send(error.message)
  }
}


///////// POST /////////

const newPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({ post })
  } catch (error) {
    return res.sendStatus(500).send(error.message)
  }
}

const addComment = async (req, res) => {
  try {
    const postId = req.body.post
    const comment = await new Product(req.body)
    await comment.save()

    const post = await Post.findById(postId)
    post.comment.push(comment._id)
    await Post.findByIdAndUpdate(postId, post)
    return res.status(201).json(comment)

  } catch (error) {
    return res.sendStatus(500).send(error.message)
  }
}

module.exports = {
  getAllPosts,
  getPost,
  newPost,
  addComment
}
