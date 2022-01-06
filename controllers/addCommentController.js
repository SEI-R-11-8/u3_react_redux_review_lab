const { CommentColl, PostColl } = require('../models');

const addComment = async (req, res) => {
    try {
        let comment = await CommentColl.insertMany(req.body);
        let post = await PostColl.findOne({ _id: req.params.postId });
        let newPost = await PostColl.findOneAndUpdate(
            { _id: req.params.postId }, 
            { comments: [...post.comments, comment[0]._id] },
            { new: true }
        );
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = addComment;