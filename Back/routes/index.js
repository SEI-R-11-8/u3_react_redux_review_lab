const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('IamRoot'));
router.post('/locations', controllers.createLocation);
router.get('/locations', controllers.getAllLocations);
router.get('/locations/:id', controllers.getLocationById);
router.put('/locations/:id', controllers.updateLocation);
router.delete('/locations/:id', controllers.deleteLocation);
router.post('/comments', controllers.createComment);
router.get('/comments', controllers.getAllComments);
router.get('/comments/:id', controllers.getCommentById);
router.put('/comments/:id', controllers.updateComment);
router.delete('/comments/:id', controllers.deleteComment);

module.exports = router;
