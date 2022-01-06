const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root'))

router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getComments)
router.get('/comment/:id', controllers.getOneComment)

router.delete('/posts/:id', controllers.deleteComment)

router.post('/posts/:id', controllers.postComment)

router.put('/posts/:id', controllers.updateComment)

module.exports = router;