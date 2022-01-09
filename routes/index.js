const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));

router.get('/beaches', controllers.getAllBeachesController);
router.get('/beaches/:id', controllers.getBeachByIdController);
router.post('/addbeach', controllers.createBeachController);
router.put('/updatebeach/:id', controllers.updateBeachController);
router.delete('/beaches/:id', controllers.deleteBeachController);

router.get('/comments', controllers.getAllCommentsController);
router.get('/comments/:id', controllers.getCommentByIdController);
router.post('/addcomment', controllers.createCommentController);
router.put('/updatecomment/:id', controllers.updateCommentController);
router.delete('/comment/:id', controllers.deleteCommentController);

module.exports = router;
