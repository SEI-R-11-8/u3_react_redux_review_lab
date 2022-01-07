const db = require ('../db')
const {Location, Comment} = require ('../models/Locations')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    
    const location = await new Location({
        name: 'Grand Canyon',
        location: 'AZ, USA',
        image: 'https://duckduckgo.com/i/0cd14d9d.jpeg',
        description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles long, up to 18 miles wide and attains a depth of over a mile",
        comments: []
        
    })
    location.save()

    const comments = await new Comment({
        authorName: 'Ricky Gervais',
        comment: 'Beautiful hole in the ground',
        location:location._id
    })
   
   comments.save()


    
        


    // await location.populate([comments])
    console.log("Created locale")
    
}
const run = async () => {
    await main()
    db.close()
}

run()