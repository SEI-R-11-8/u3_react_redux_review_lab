const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));
router.get('/destination', controllers.getAllDestinations);
router.get('/reviews', controllers.getAllReviews);
router.get('/destination/:id', controllers.getDestinationById);
router.post('/reviews', controllers.postReview);

module.exports = router;
