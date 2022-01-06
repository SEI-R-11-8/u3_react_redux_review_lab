const { Router } = require('express');
const controller = require('../controllers/index');
const router = Router();
//Posts
router.get('/', (req, res) => res.send('This is root!'));
router.post('/createposts', controller.createPost);
router.get('/posts', controller.getAllPosts);
router.get('/posts/:id', controller.getPostByID);
//Comments
router.get('/', (req, res) => res.send('This is root!'));
router.post('/createcomments', controller.createComment);
router.get('/comments', controller.getAllComments);
router.get('/comments/:id', controller.getCommentByID);

module.exports = router;
