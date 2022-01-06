const { Router } = require('express')
const controller = require('./controllers')

const router = Router()

router.get('/', (req,res) => res.send('This is root!'))

router.get('/destinations', controller.getDestinations)
router.get('/destinations/:id', controller.getById)

router.post('/comments', controller.postComment)
router.post('/reviews', controller.postReview)

router.delete('/destinations/:id', controller.deleteById)

module.exports = router