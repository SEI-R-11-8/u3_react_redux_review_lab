const Comments = require('../models/comments')
const Posts = require('../models/posts')

const getAllComments = async (req, res) => {
    try {
      const comments = await Comments.find();
      return res.status(200).json({ comments });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const getAllPosts = async (req, res) => {
    try {
      const posts = await Posts.find();
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const addNewComment = async (req, res) => {
    try {
      const comments = await new Comments(req.body);
      await comments.save();
      return res.status(201).json({
         comments
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  const addNewPost = async (req, res) => {
    try {
      const posts = await new Posts(req.body);
      await posts.save();
      return res.status(201).json({
        posts
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await Comments.findById(id)
        if (comments) {
            return res.status(200).json({ comments });
        }
        return res.status(404).send('Comment with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await Posts.findById(id)
        if (posts) {
            return res.status(200).json({ posts });
        }
        return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      await Comments.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
        (err, comments) => {
          // if (err) {
          //   res.status(500).send(err);
          // }
          // if (!review) {
          //   res.status(500).send('Review not found!');
          // }
          return res.status(200).json(comments);
        }
      );
    } catch (error) {
      // res.status(500).send(error.message);
    }
  }

  const updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      await Posts.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
        (err, posts) => {
          // if (err) {
          //   res.status(500).send(err);
          // }
          // if (!review) {
          //   res.status(500).send('Review not found!');
          // }
          return res.status(200).json(posts);
        }
      );
    } catch (error) {
      // res.status(500).send(error.message);
    }
  }

  const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comments.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Posts.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted");
        }
        throw new Error("Post not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllComments,
    getAllPosts,
    addNewComment,
    addNewPost,
    getCommentById,
    getPostById,
    updateComment,
    updatePost,
    deleteComment,
    deletePost
}