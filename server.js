const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const travelController = require("./controllers/index");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Still working?!?");
});

app.get("/cities", travelController.getCities);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
