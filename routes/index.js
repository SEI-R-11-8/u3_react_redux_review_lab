const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root'))

router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getOnePost)
router.get('/comments/:id', controllers.getComments)
router.get('/comment/:id', controllers.getOneComment)

router.delete('/comments/:id', controllers.deleteComment)

router.post('/comments/:id', controllers.postComment)

router.put('/comments/:id', controllers.updateComment)

module.exports = router;