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
      const comment = await new Comment(req.body);
      await comment.save();
      return res.status(201).json({
         comment
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  const addNewPost = async (req, res) => {
    try {
      const post = await new Post(req.body);
      await post.save();
      return res.status(201).json({
        product
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id)
        if (comment) {
            return res.status(200).json({ comment });
        }
        return res.status(404).send('Comment with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        if (post) {
            return res.status(200).json({ post });
        }
        return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      await Comment.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
        (err, comment) => {
          // if (err) {
          //   res.status(500).send(err);
          // }
          // if (!review) {
          //   res.status(500).send('Review not found!');
          // }
          return res.status(200).json(comment);
        }
      );
    } catch (error) {
      // res.status(500).send(error.message);
    }
  }

  const updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      await Post.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
        (err, post) => {
          // if (err) {
          //   res.status(500).send(err);
          // }
          // if (!review) {
          //   res.status(500).send('Review not found!');
          // }
          return res.status(200).json(post);
        }
      );
    } catch (error) {
      // res.status(500).send(error.message);
    }
  }

  const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
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
        const deleted = await Post.findByIdAndDelete(id)
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