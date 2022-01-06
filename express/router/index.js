const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.post('/cities', controllers.createCity);

router.post('/reviews', controllers.createReview);

router.get('/cities', controllers.getAllCities);

router.get('/reviews', controllers.getAllReviews);

router.get('/cities/details/:_id', controllers.getCityById);

router.get('/reviews/details/:_id', controllers.getReviewById);

router.put('/cities/details/:_id', controllers.updateCity);

router.put('/reviews/details/:_id', controllers.updateReview);

router.delete('/cities/details/:_id', controllers.deleteCity);

router.delete('/reviews/details/:_id', controllers.deleteReview);

module.exports = router;
