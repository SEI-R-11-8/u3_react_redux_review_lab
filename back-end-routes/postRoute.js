const router = require('express').Router();
const getPost = require('../controllers/getPostController');
const getComments = require('../controllers/getCommentsController');
const getReviews = require('../controllers/getReviewsController');
const addComment = require('../controllers/addCommentController');
const addPostLike = require('../controllers/addPostLikeController');
const addReviewLike = require('../controllers/addReviewLikeController');

router.get('/post/:id', getPost);
router.get('/comments/:postId', getComments);
router.get('/reviews/:postId', getReviews);
router.post('/api/addcomment/:postId', addComment);
router.put('/addpostlike/:postId', addPostLike);
router.put('/addreviewlike/:reviewId', addReviewLike);

module.exports = router;