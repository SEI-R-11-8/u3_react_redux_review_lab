const { Router } = require("express")
const router = Router()
const controllers = require("../controllers/index")


router.get("/", (req, res) => res.send("This is root!"))


router.get('/locations/:id', controllers.getLocationById)
router.get('/locations', controllers.getAllLocations)
router.get('/comments', controllers.getAllComments)
router.put('/locations/update/:id', controllers.updateLocation)
router.delete('/comments/:id', controllers.deleteComment)
router.post('/locations', controllers.createLocation)
router.post('/locations/:id/', controllers.createComment)



module.exports = router;