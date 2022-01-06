const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/comments', controllers.getAllComments)

router.get('/posts', controllers.getAllPosts)

router.post('/comments/new', controllers.addNewComment)

router.post('/posts/new', controllers.addNewPost)

router.get('/comments/:id', controllers.getCommentById)

router.get('/posts/:id', controllers.getPostById)

router.put('/comments/:id', controllers.updateComment)

router.put('/posts/:id', controllers.updatePost)

router.delete('/comments/:id', controllers.deleteComment)

router.delete('/posts/:id', controllers.deletePost)


module.exports = router;