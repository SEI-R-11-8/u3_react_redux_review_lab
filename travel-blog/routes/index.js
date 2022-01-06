const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('I AM ROOT!'));
router.get('/reviews', controllers.getAllReviews);
router.post('/reviews', controllers.createReview);
router.get('/comments', controllers.getAllComments);
router.post('/comments', controllers.createComment);
router.delete('/review/:id', controllers.deleteReview);
router.delete('/comment/:id', controllers.deleteComment);
router.put('/review/:id', controllers.updateReview);
router.put('/comment/:id', controllers.updateComment);

module.exports = router;
