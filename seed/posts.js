const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const posts = [
    {
      title: "Machu Picchu",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
      description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.",
      price: 45,
      location: "08680, Peru"
    },
    {
      title: "Great Pyramid of Giza",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      description: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
      price: 10,
      location: "Greater Cairo, Egypt"
    },
    {
      title: "Christ the Redeemer",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg",
      description: "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local pronunciation: [ˈkɾiɕtŭ̥ xe̞dẽˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone.",
      price: 25,
      location: "Rio de Janeiro, Brazil"
    },
    {
      title: "Colosseum",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",
      description: "The Colosseum (/ˌkɒləˈsiːəm/ KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.",
      price: 20,
      location: "Rome, Italy",
    },
    {
      title: "Stonehenge",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
      description: "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones. Inside is a ring of smaller bluestones. Inside these are free-standing trilithons, two bulkier vertical Sarsens joined by one lintel. The whole monument, now ruinous, is orientated towards the sunrise on the summer solstice. The stones are set within earthworks in the middle of the most dense complex of Neolithic and Bronze Age monuments in England, including several hundred tumuli (burial mounds).",
      price: 25,
      location: "Wiltshire, England"
    },
    {
      title: "Taj Mahal",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      description: "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace', [taːdʒ ˈmɛːɦ(ə)l]), is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. ",
      price: 25,
      location: "Agra, Uttar Pradesh, India"
    }
  ];

  await Post.insertMany(posts)
  console.log('Posts created successfully')
};

const run = async () => {
  await main();
  db.close();
}

run();