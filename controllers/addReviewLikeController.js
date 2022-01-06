const { ReviewColl } = require('../models');

const addReviewLike = async (req, res) => {
    try {
        let review = await ReviewColl.findOne({ _id: req.params.reviewId });
        let likeNum = review.likes + 1;
        let newReview = await ReviewColl.findOneAndUpdate(
            { _id: req.params.reviewId },
            { likes: likeNum },
            { new: true }
        );
        res.status(200).json(newReview);
    } catch (error) {
        res.status(500).send({ error: error.message });
    };
};

module.exports = addReviewLike;