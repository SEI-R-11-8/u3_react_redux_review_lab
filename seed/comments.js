const db = require('../db')
const Comment = require('../models/comment')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const locationOne = await Post.find({name: 'South Island, New Zealand'})
    const locationTwo = await Post.find({name: 'Paris'})
    const locationThree = await Post.find({name: 'Bora Bora'})
    const locationFour = await Post.find({name: 'Maui'})
    const locationFive = await Post.find({name: 'Tahiti'})
    const locationSix = await Post.find({name: 'London'})
    const locationSeven = await Post.find({name: 'Rome'})
    const locationEight = await Post.find({name: 'Phuket'})
    const locationNine = await Post.find({name: 'Tokyo'})
    const locationTen = await Post.find({name: 'Glacier National Park'})

    const comments = [
        {
            name: 'Dave',
            comment: 'Beautiful Place!',
            rating: '5',
            post_id: locationOne[0]._id,
        },
        {
            name: 'Mike',
            comment: 'Nice!',
            rating: '4',
            post_id: locationTwo[0]._id,
        },
        {
            name: 'Michael',
            comment: 'Would love to visit this place again',
            rating: '5',
            post_id: locationThree[0]._id,
        },
        {
            name: 'David',
            comment: 'Would have come earlier if I knew about this place',
            rating: '4',
            post_id: locationFour[0]._id,
        },
        {
            name: 'Karen',
            comment: 'It was decent',
            rating: '3',
            post_id: locationFive[0]._id,
        },
        {
            name: 'Carl',
            comment: 'Did not like it that much',
            rating: '2',
            post_id: locationSix[0]._id,
        },
        {
            name: 'Jane',
            comment: 'Totally loved it!',
            rating: '5',
            post_id: locationSeven[0]._id,
        },
        {
            name: 'Jenny',
            comment: 'Wow!!! This place is amazing',
            rating: '5',
            post_id: locationEight[0]._id,
        },
        {
            name: 'Rebecca',
            comment: 'Ummm did not like this place to be honest',
            rating: '2',
            post_id: locationNine[0]._id,
        },
        {
            name: 'Mickey',
            comment: 'This place was somewhat. Not so good not so bad',
            rating: '3',
            post_id: locationTen[0]._id,
        }
    ]

    await Comment.insertMany(comments)
    console.log('Added some comments')
}

const run = async () => {
    await main()
    db.close()
}

run()