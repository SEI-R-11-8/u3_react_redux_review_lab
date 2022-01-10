const { Router } = require('express')
const controllers = require('../controllers');
const router = Router();

router.get('/', (request, response) => response.send('This is working!'));

router.get('/posts', controllers.getPosts)

router.get('/reviews', controllers.getReviews)

router.post('/reviews', controllers.createReview)

// router.put('/reviews/:id', controllers.updateReview)

router.delete('/reviews/:id', controllers.deleteReview)

module.exports = router;