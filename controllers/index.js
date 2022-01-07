const Destination = require('../models/destination');
const Review = require('../models/review');

const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        return res.status(200).json({ destinations });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        return res.status(200).json({ reviews });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getDestinationById = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await Destination.findById(id);
        if (destination) {
            return res.status(200).json({ destination });
        }
        return res.status(404).send('Destination with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body);
        await review.save();
        return res.status(201).json({
            review
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        await Review.findByIdAndUpdate(
            id,
            req.body,
            { new: true },
            (err, review) => {
                return res.status(200).json(review);
            }
        );
    } catch (error) {
    }
};

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Review.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('Review deleted');
        }
        throw new Error('Review not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getByDestinationName = async (req, res) => {
    const name = req.params.name;

    try {
        const reviews = await Review.find({ name: name });
        return res.status(200).json({ reviews });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getDestinationByDestinationName = async (req, res) => {
    const name = req.params.name;
    try {
        const destinations = await Destination.find({ name: name });
        return res.status(200).json({ destinations });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllDestinations,
    getDestinationById,
    getAllReviews,
    createReview,
    updateReview,
    deleteReview,
    getByDestinationName,
    getDestinationByDestinationName
};
