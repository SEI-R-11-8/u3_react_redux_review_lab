const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/posts', controllers.createPost)
router.get('/posts/:id', controllers.getPostbyId)
router.get('/posts', controllers.getAllPosts)
router.put('/posts/:id', controllers.updatePost)

router.post('/comments', controllers.createComment)
router.put('/comments/:id', controllers.updateComment)

module.exports = router