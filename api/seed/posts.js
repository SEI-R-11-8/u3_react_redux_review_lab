const db = require('../db')
const Posts = require('../models/posts')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const posts = [
        {   
            _id: '61c391cd5186d00a6f8f9909',
            post_location: 'Alaska',
            post_description: 'Sunny sometimes, dark a lot of the time',
            post_image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png',
            comment_id: ['61c391cd5186d00a6f8f1111', '61c391cd5186d00a6f8f1112', '61c391cd5186d00a6f8f1113']
        },
        {   
            _id: '61c391cd5186d00a6f8f9908',
            post_location: 'Bali',
            post_description: 'It is nice here!',
            post_image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png',
            comment_id: ['61c391cd5186d00a6f8f1114', '61c391cd5186d00a6f8f1115', '61c391cd5186d00a6f8f1116']
        },
        {   
            _id: '61c391cd5186d00a6f8f9907',
            post_location: 'Florida',
            post_description: 'Gators and things',
            post_image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png',
            comment_id: ['61c391cd5186d00a6f8f1117', '61c391cd5186d00a6f8f1118', '61c391cd5186d00a6f8f1119']
        }
    ]



    await Posts.insertMany(posts)
    console.log("Created some posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()