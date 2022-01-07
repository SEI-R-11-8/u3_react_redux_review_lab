const { Router } = require('express');
const router = Router();
const controllers = require("../controllers")


router.get('/', (req, res) => res.send('This is root!'))
router.get("/posts", controllers.getAllPosts)
router.get("/posts/:id", controllers.getPostById)
router.post("/reviews", controllers.createReview)

module.exports = router;

