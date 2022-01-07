const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/destinations', controllers.getAllDestinations);
router.get('/destinations/id/:id', controllers.getDestinationById);
router.get('/reviews', controllers.getAllReviews);
router.post('/reviews', controllers.createReview);
router.put('/reviews/:id', controllers.updateReview);
router.delete('/reviews/:id', controllers.deleteReview);
router.get('/reviews/:name', controllers.getByDestinationName);
router.get('/destinations/:name', controllers.getDestinationByDestinationName);

module.exports = router;
