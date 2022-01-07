const Destination = require('../models/destination');
const Review = require('../models/review');

// GETS ALL DESTINATIONS & REVIEWS
const getDestinations = async (req, res) => {
	try {
		const destinations = await Destination.find();
		return res.status(201).json({ destinations });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getReviewsByDestination = async (req, res) => {
	try {
		const { destination_id } = req.params;
		const reviews = await Review.find({ destination_id });
		return res.status(201).json({ reviews });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getReviews = async (req, res) => {
	try {
		const reviews = await Review.find();
		return res.status(201).json({ reviews });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

// GETS ALL DESTINATIONS BY ID
const getDestinationById = async (req, res) => {
	try {
		const { id } = req.params;
		const destination = await Destination.findById(id);
		if (destination) {
			return res.status(200).json({ destination });
		}
		return res
			.status(404)
			.send('Destination with the specified ID does not exist');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

// CREATE DESTINATIONS & REVIEWS
const createDestination = async (req, res) => {
	try {
		const newDestination = await new Destination(req.body);
		await newDestination.save();
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const createReview = async (req, res) => {
	try {
		const newReview = await new Review(req.body);
		await newReview.save();
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

// UPDATE DESTINATION OR REVIEW
const updateDestination = async (req, res) => {
	try {
		const { id } = req.params;
		await Destination.findByIdAndUpdate(
			id,
			req.body,
			{ new: true },
			(err, destination) => {
				if (err) {
					res.status(500).send(err);
				}
				if (!destination) {
					res.status(500).send('Destination not found!');
				}
				return res.status(200).json(destination);
			}
		);
	} catch (error) {
		// return res.status(500).send(error.message);
	}
};

const updateReview = async (req, res) => {
	try {
		const { id } = req.params;
		await Review.findByIdAndUpdate(
			id,
			req.body,
			{ new: true },
			(err, destination) => {
				if (err) {
					res.status(500).send(err);
				}
				if (!destination) {
					res.status(500).send('Review not found!');
				}
				return res.status(200).json(destination);
			}
		);
	} catch (error) {
		// return res.status(500).send(error.message);
	}
};

// DELETE DESTINATION OR COMMENT
const deleteDestination = async (req, res) => {
	try {
		const { id } = req.params;
		const destination = await Destination.findByIdAndDelete(id);
		if (destination) {
			return res.status(200).send('Destination has been successfully deleted');
		}
		throw new Error('Destination not found');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const deleteReview = async (req, res) => {
	try {
		const { id } = req.params;
		const review = await Destination.findByIdAndDelete(id);
		if (review) {
			return res.status(200).send('Review has been successfully deleted');
		}
		throw new Error('Review not found');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	getDestinations,
	getReviews,
	getDestinationById,
	getReviewsByDestination,
	createDestination,
	createReview,
	updateDestination,
	updateReview,
	deleteDestination,
	deleteReview,
};
