const db = require("../db/index");
const { City } = require("../models/index");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const cities = [
    {
      name: "Paris",
      image:
        "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/vue-sur-les-toits-de-la-tour-saint-jacques-%7C-740x380-%7C-%C2%A9-elodie-gutbrod-cr%C3%A9atividie/21581411-1-fre-FR/Vue-sur-les-toits-de-la-tour-Saint-Jacques-%7C-740x380-%7C-%C2%A9-Elodie-Gutbrod-Cr%C3%A9atividie.jpg",
      likes: 345,
    },
    {
      name: "Ibiza",
      image:
        "https://media.cntraveller.com/photos/611beb82a954a4e571f6f154/16:9/w_2992,h_1683,c_limit/ibiza-gettyimages-170891734.jpg",
      likes: 234,
    },
    {
      name: "Rio de Janeiro",
      image:
        "https://destinationlesstravel.com/wp-content/uploads/2021/11/Sunset-view-from-Sugarloaf-Mountain-1080x721.jpg.webp",
      likes: 502,
    },
  ];

  await City.insertMany(cities);
  console.log("Created cities!");
};

const run = async () => {
  await main();
  db.close();
};

run();
