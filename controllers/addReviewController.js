const { ReviewColl, PostColl } = require('../models');

const addReview = async (req, res) => {
    try {
        let review = await ReviewColl.insertMany(req.body);
        let post = await PostColl.findOne({ _id: req.params.postId });
        let newPost = await PostColl.findOneAndUpdate(
            { _id: req.params.postId },
            { reviews: [...post.reviews, review[0]._id] },
            { new: true }
        );
        res.status(200).json(review[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = addReview;