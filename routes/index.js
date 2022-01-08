const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));
router.get('/locations', controllers.getAllLocations);
router.get('/locations/:id', controllers.getLocationsById);
router.put('/locations/:id', controllers.updateLocation);
router.get('/comments', controllers.getAllComments);
router.post('/comments', controllers.createComment);
router.get('/comments/:id', controllers.getCommentsById);
router.delete('/comments/:id', controllers.deleteComment);
router.put('/comments/:id', controllers.updateComment);

module.exports = router;
