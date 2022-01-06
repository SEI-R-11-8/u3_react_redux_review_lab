const Post = require('../models/posts');
const Comment = require('../models/comments');
//Posts
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
//Comments
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

const getCommentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (comment) {
      return res.status(200).json({ comment });
    }
    return res.status(404).send('Comment with this id does not exist');
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

module.exports = {
  createPost,
  getAllPosts,
  getPostByID,
  createComment,
  getAllComments,
  getCommentByID
};
