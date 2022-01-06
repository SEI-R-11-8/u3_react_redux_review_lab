const db = require('../db')
const { Comment } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {

    const comments = [
        {
            comment: 'guatape is nice ',
            destination: undefined
        },
        {
            comment: 'colorful river',
            destination: undefined
        },
        {
            comment: 'beautiful islands',
            destination: undefined
        },
        {
            comment: 'awesome park',
            destination: undefined
        },
        {
            comment: 'the northermost point of south america',
            destination: undefined
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