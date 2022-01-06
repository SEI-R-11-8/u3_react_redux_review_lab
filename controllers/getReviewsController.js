const { ReviewColl } = require('../models');

const getReviews = async (req, res) => {
    try {
        let reviews = await ReviewColl.find({ post: req.params.postId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getReviews;