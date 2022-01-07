const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

// CRUD FOR DESTINATIONS
router.get('/destinations', controllers.getDestinations);
router.get('/destinations/:id', controllers.getDestinationById);
router.post('/destinations', controllers.createDestination);
router.put('/destinations/:id', controllers.updateDestination);
router.delete('/destinations/:id', controllers.deleteDestination);

// CRUD FOR REVIEWS
router.get('/reviews', controllers.getReviews);
router.get(
	'/destinations/:destination_id',
	controllers.getReviewsByDestination
);
router.post('/reviews', controllers.createReview);
router.put('/reviews/:id', controllers.updateReview);
router.delete('/reviews/:id, controllers.deleteReview');

module.exports = router;
