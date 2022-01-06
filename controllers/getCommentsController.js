const { CommentColl } = require('../models');

const getComments = async (req, res) => {
    try {
        let comments = await CommentColl.find({ post: req.params.postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getComments;