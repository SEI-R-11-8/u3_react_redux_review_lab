const { Router } = require('express');
const controller = require('../controllers/index');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.post('/createposts', controller.createPost);
router.get('/posts', controller.getAllPosts);
router.get('/posts/:id', controller.getPostByID);

module.exports = router;
