const { PostColl } = require('../models');

const getPost = async (req, res) => {
    try {
        let post = await PostColl.findOne({ _id: req.params.id });
        res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getPost;