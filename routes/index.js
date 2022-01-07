const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/comments' , controllers.createComment)
router.get('/comments', controllers.getComments)
router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPostsById)

module.exports = router;