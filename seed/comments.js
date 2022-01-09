const db = require('../db')
const { Comment } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {

    const comments = [
        {
            comment: 'guatape is nice ',
            destination: []
        },
        {
            comment: 'colorful river',
            destination: []
        },
        {
            comment: 'beautiful islands',
            destination: []
        },
        {
            comment: 'awesome park',
            destination: []
        },
        {
            comment: 'the northermost point of south america',
            destination: []
        }
    ]

    await Comment.insertMany(comments)
    console.log(`Created ${comments.length} comments`)
}

const run = async () => {
    await main()
    db.close()
}

run()