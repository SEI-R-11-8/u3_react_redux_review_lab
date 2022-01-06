const db = require('../db')
const { Review } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {

    const reviews = [
        {
            review: 'this is a review of guatape',
            destination: undefined
        },
        {
            review: 'this is a review of caño cristales',
            destination: undefined
        },
        {
            review: 'this is a review of rosario islands',
            destination: undefined
        },
        {
            review: 'this is a review of tayrona park',
            destination: undefined
        },
        {
            review: 'this is a review of punta gallina',
            destination: undefined
        }
    ]

    await Review.insertMany(reviews)
    console.log(`Created ${reviews.length} reviews`)
}

const run = async () => {
    await main()
    db.close()
}

run()