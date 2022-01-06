const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));

router.get('/beaches', controllers.getAllBeaches);
router.get('/beaches/:id', controllers.getBeachById);
router.post('/addbeach', controllers.createBeach);
router.put('/updatebeach/:id', controllers.updateBeach);
router.delete('/beaches/:id', controllers.deleteBeach);

router.get('/comments', controllers.getAllComments);
router.get('/comments/:id', controllers.getCommentById);
router.post('/addcomment', controllers.createComment);
router.put('/updatecomment/:id', controllers.updateComment);
router.delete('/comment/:id', controllers.deleteComment);

module.exports = router;
