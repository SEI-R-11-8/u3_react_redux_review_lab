const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()


router.get('/', (req, res) => res.send('This is 🌱'))

router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getPost)

// router.get('/comments/:id', controllers.getComment)

router.post('/posts', controllers.newPost)
router.post('/comments', controllers.addComment)
//
// router.put('/departments/:id', controllers.updatePost)
// router.put('/products/:id', controllers.updateComment)
//
// router.delete('/departments/:id', controllers.deletePost)
// router.delete('/products/:id', controllers.deleteComment)

module.exports = router
