const Post = require('../models/posts');

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    await post.save();
    return res.status(201).json({
      post
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPostByID = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
      return res.status(200).json({ post });
    }
    return res.status(404).send('Post with this id does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostByID
};
