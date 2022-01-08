const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index");

////////

router.get("/", (req, res) => res.send("This is root!"));

router.get("/cities", controllers.getAllCities);

router.get("/city/:id", controllers.getCity);

//////

router.post("/comments", controllers.postComment);

router.get("/comments", controllers.getAllComments);

router.put("/comments/:id", controllers.updateComment);

router.delete("/comments/:id", controllers.deleteComment);

router.get("/comments/:id", controllers.getCommentsByID);

//////////

router.post("/reviews", controllers.postReview);

router.get("/reviews", controllers.getAllReviews);

router.get("/reviews/:id", controllers.getReviewsByID);

module.exports = router;
