const db = require("../db/index");
const { City, Comment } = require("../models/index");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const paris = await City.find({ name: "Paris" });
  const ibiza = await City.find({ name: "Ibiza" });
  const riodejaneiro = await City.find({ name: "Rio de Janeiro" });

  const comments = [
    {
      comment: "Love the French!",
      city_id: paris[0]._id,
    },
    {
      comment: "The parties here are incredible!",
      city_id: ibiza[0]._id,
    },
    {
      comment: "I love the movie 'Brazil'... just saying...",
      city_id: riodejaneiro[0]._id,
    },
  ];

  await Comment.insertMany(comments);
  console.log("Created cities!");
};

const run = async () => {
  await main();
  db.close();
};

run();
