const db = require('../db')
const Comments = require('../models/comments')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const comments = [
        {
            comment_id: '61c391cd5186d00a6f8f1111',
            comment_name: 'James F',
            comment_review: 'Nice Glaciers!',
            post_id: '61c391cd5186d00a6f8f9909'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1112',
            comment_name: 'Amber T',
            comment_review: 'I liked the whales',
            post_id: '61c391cd5186d00a6f8f9909'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1113',
            comment_name: 'Amy W',
            comment_review: 'Not enough sun.',
            post_id: '61c391cd5186d00a6f8f9909'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1114',
            comment_name: 'Kimber W',
            comment_review: 'Nice beaches.',
            post_id: '61c391cd5186d00a6f8f9910'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1115',
            comment_name: 'SD Truba',
            comment_review: 'Great place to go and get lost for awhile.',
            post_id: '61c391cd5186d00a6f8f9910'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1116',
            comment_name: 'KD Jenkins',
            comment_review: 'Cannot wait to go back!',
            post_id: '61c391cd5186d00a6f8f9910'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1117',
            comment_name: 'Ginny E',
            comment_review: 'The best State in America!',
            post_id: '61c391cd5186d00a6f8f9111'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1118',
            comment_name: 'Sunny D',
            comment_review: 'Too many old people',
            post_id: '61c391cd5186d00a6f8f9111'
        },
        {
            comment_id: '61c391cd5186d00a6f8f1119',
            comment_name: 'Sutherland',
            comment_review: 'Land of the free people.',
            post_id: '61c391cd5186d00a6f8f9111'
        }
    ]



    await Comments.insertMany(comments)
    console.log("Created some comment!")
}
const run = async () => {
    await main()
    db.close()
}

run()