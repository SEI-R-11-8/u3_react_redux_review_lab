const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('I AM ROOT!'));
router.get('/reviews', controllers.getAllReviews);
router.post('/reviews', controllers.createReview);

module.exports = router;
