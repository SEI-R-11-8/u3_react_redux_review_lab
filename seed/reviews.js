const db = require("../db/index");
const { City, Review } = require("../models/index");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const paris = await City.find({ name: "Paris" });
  const ibiza = await City.find({ name: "Ibiza" });
  const riodejaneiro = await City.find({ name: "Rio de Janeiro" });

  const reviews = [
    {
      review: "I think it's a bit overrated. Some of the people were rude",
      rating: 4,
      city_id: paris[0]._id,
    },
    {
      review:
        "I found a new way of life here. I would recommend Ibiza for anyone trying to change their life.",
      rating: 10,
      city_id: ibiza[0]._id,
    },
    {
      review:
        "The food and people here are amazing. I stayed a week and I wish I could have stayed longer!!!",
      rating: 8,
      city_id: riodejaneiro[0]._id,
    },
  ];

  await Review.insertMany(reviews);
  console.log("Created reviews!");
};

const run = async () => {
  await main();
  db.close();
};

run();
