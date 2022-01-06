const { PostColl } = require('../models');

const addPostLike = async (req, res) => {
    try {
        let post = await PostColl.findOne({ _id: req.params.postId });
        let likeNum = post.likes + 1;
        let newPost = await PostColl.findOneAndUpdate(
            { _id: req.params.postId },
            { likes: likeNum },
            { new: true }
        )
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = addPostLike;