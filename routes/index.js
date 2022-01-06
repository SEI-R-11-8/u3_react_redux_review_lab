const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index");

router.get("/", (req, res) => res.send("This is root!"));

router.get("/cities", controllers.getAllCities);

module.exports = router;
