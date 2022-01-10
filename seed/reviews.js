const db = require('../db');
const faker = require('faker');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const createReviews = async () => {

    const names = [
        'Machu Picchu', 'South Island, New Zealand', 'Paris', 'Tahiti', 'Rome'
    ]

    const reviews = [...Array(30)].map((review) => {
        return new Review({
            title: faker.lorem.sentence(),
            name: faker.random.word(names),
            username: faker.name.firstName(),
            description: faker.lorem.paragraph(),
            rating: faker.random.number(5)
        });
    });
    await Review.insertMany(reviews);
    console.log('We wrote some reviews!');
    return reviews;
};

const run = async () => {
    const review = await createReviews();
    db.close();
};

run();