const Post = require("../models/post")
const Review = require("../models/review")

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostById = async (req, res) => {
  try {
    const id = req.params.id
    const posts = await Post.findById(id).populate('reviews')
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const postId = req.body.post_id
    const review = await new Review(req.body)
    await review.save()
    
    const post = await Post.findById(postId)
    post.reviews.push(review._id)
    await Post.findByIdAndUpdate(postId,post)

    return res.status(201).json(review)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports ={
  createReview,
  getAllPosts,
  getPostById,
}
