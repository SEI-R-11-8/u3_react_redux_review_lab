const router = require('express').Router();
const addReview = require('../controllers/addReviewController');

router.post('/addreview/:postId', addReview);

module.exports = router;