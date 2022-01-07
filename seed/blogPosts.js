const db = require('../db')
const { Blog } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const blogs=[
        {
            date: '01/02/2020',
            blog_post: 'This Month I went to the store'
        },

        {
            date: '02/02/2020',
            blog_post: 'This Month we went to a park'
        },

        {
            date: '03/02/2020',
            blog_post: 'This Month I did something I never did before'
        },

        {
            date: '04/02/2020',
            blog_post: 'This Month I ate in a new cafe'
        },

        {
            date: '05/02/2020',
            blog_post: 'This Month I went on a date'
        }
    ]

    await Blog.insertMany(blogs)
    console.log('Seed the posts into database')

}

const run = async () => {
    await main();
    db.close();
};
run();