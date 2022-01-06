const { Router } = require('express');

const router = Router();
const controllers = require('../controllers');

//this is api/location

router.get('/', controllers.getAllLocations);
router.get('/:locationId', controllers.getLocationById);

router.get('/:locationId/review', controllers.getAllReviews);
router.put('/review/:reviewId', controllers.updateReview);
router.post('/:locationId/review', controllers.createReview);

module.exports = router;
