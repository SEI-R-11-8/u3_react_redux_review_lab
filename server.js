const { City } = require("./models/index");
const express = require("express");
const routes = require("./routes/index");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const db = require("./db");

//const travelController = require("./controllers/index");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Still working?!?");
});

// app.get("/cities", async (req, res) => {
//   const cities = await City.find();
//   res.json(cities);
// });

//app.get("/cities", travelController.getCities);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
