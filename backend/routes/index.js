const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!')); //HOME

router.post('/locations', controllers.createLocation); //CREATE

router.get('/locations', controllers.getAllLocations); //READ

router.get('/locations/:id', controllers.getLocationById); //READ

router.put('/locations/:id', controllers.updateLocation); //UPDATE

router.delete('/locations/:id', controllers.deleteLocation); //DELETE

module.exports = router;
