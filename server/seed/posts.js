const db = require('../db');
const Post = require('../models/posts');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const posts = [
    {
      name: 'Tangerine',
      location: '2777 Iris Ave, Boulder, Colorado, 80304',
      details:
        'Located in North Boulder, Old Town Lafayette and Downtown Longmont,  Tangerine creates innovative takes on traditional morning fare. The menu is rich with natural quality and focused on fresh products, with many vegetarian and gluten free options. It’s American brunch/lunch format with a healthy and Mediterranean twist. Everything is made from scratch except for cheeses, breads and some meats. Enjoy a morning experience worth waking up for, with expert baristas creating fine coffee drinks with locally roasted Salto coffees, in-season local farm fresh produce, a full bar, and our bright and cheery decor.',
      image:
        'https://www.tangerineeats.com/wp/wp-content/uploads/2021/05/MSH_Tangerine-58-md-1024x683.jpg'
    },
    {
      name: "Foolish Craig's Cafe",
      location: '1611 Pearl St, Boulder, CO 80302',
      details:
        'Established in 1998, Foolish Craigs is a fun, owner operated café in Boulder, Colorado open for breakfast, lunch, brunch, and drinks. Our award winning bread is made fresh daily in our bakery.  From slow-braising our corned beef and pork shoulder, to making our soups and dressings in-house, our goal is to serve the best, tastiest food possible.  Virtually every item on our menu from the crepes to the desserts are made to order.  We use eggs that are locally raised, nest fresh and cage free.',
      image: 'https://ctycms.com/co-boulder/images/foolishcraigs.jpg'
    },
    {
      name: "Lucile's Creole Cafe",
      location: '2124 14th St, Boulder, CO 80302',
      details:
        'Lucile’s Restaurant was established in 1980, by myself and my mother, Lucile Richards. We developed a Creole menu shortly thereafter and shifted the restaurant’s goals to becoming the nation’s premier brunch restaurant. Lucile’s first chef received his training from the famous New Orleans restaurant, “Commanders Palace.” A breakfast and lunch restaurant serving a Creole theme had never been attempted before in Colorado. However, within a brief period, Lucile’s had made its mark with such unique meals as “Cajun Breakfast” (red beans, poached eggs, hollandaise and grits) and “Eggs New Orleans” (fried eggplant, poached eggs, creole spice and hollandaise).',
      image:
        'https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boulder/lucilles-restaurant-boulder.0.00_a13fe12e-5056-a36a-07fbeef7024ddd2f.jpg'
    }
  ];
  await Post.insertMany(posts);
  console.log('Posts Created!');
};
const run = async () => {
  await main();
  db.close();
};

run();
