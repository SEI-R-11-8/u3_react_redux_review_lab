const db = require('../db')
const Post = require("../models/post")

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [
      {
        name: "Trekking in the lake district",
        description: "One of the most beautiful regions in the whole of the country is The Lake District. Located in the northwest of England; it’s a picturesque playground of historic market towns, rugged and dramatic mountains, and of course, those mesmerising lakes.  ",
        image: "https://www.danflyingsolo.com/wp-content/uploads/2018/03/VisitEnglandDartmoorNationalPark-1030x558.jpg",
        
    },
    
    {
      name: "Surf the swell in Newquay ",
      description: "Cornwall has long been one of the most famous surf destinations in the UK, whether for experienced wave rides or beginners looking to learn the basics",
      image: "https://www.danflyingsolo.com/wp-content/uploads/2021/07/Minnack-Theatre-Cornwall-England-Travel-Guide-018-824x1030.jpg",
      
  },

  {
    name:"Scale Snowdon",
    description: "The largest national park in Wales is Snowdonia, and while there is an extensive selection of trails, lakes and jagged peaks to appreciate here",
    image: "https://www.danflyingsolo.com/wp-content/uploads/2021/07/St-Ives-Cornwall-England-Travel-Guide-022-824x1030.jpg",
    
},
    ]

    await Post.insertMany(posts)
    console.log("Created some posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()
