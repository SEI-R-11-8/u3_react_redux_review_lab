const router = require('express').Router();
const controllers = require('../controllers/');

// This is /api/location
router.get('/', controllers.getAllLocations);
router.get('/:locationId', controllers.getLocationById);

// This is /api/location/:locationId/review
router.get('/:locationId/review', controllers.getAllReviews);
// This is /api/location/:locationId/review
router.put('/review/:reviewId', controllers.updateReview);
// This is /api/location/:locationId/review
router.post('/:locationId/review', controllers.createReview);

module.exports = router;
