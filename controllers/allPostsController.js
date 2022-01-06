const { PostColl } = require('../models');

const allPosts = async (req, res) => {
    try {
        let posts = await PostColl.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = allPosts;