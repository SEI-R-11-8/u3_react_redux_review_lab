const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/locations', controllers.createLocation);
router.post('/comments', controllers.createComment);

router.get('/', (req, res) => res.send('This is root!'));
router.get('/locations', controllers.getAllLocations);
router.get('/locations/:id', controllers.getLocationById);
router.get('/comments', controllers.getAllComments);
router.get('/comments/:id', controllers.getCommentsByLocation);

router.put('/locations/:id', controllers.updateLocation);
router.put('/comments/:id', controllers.updateComment);

module.exports = router;
