const db = require('../db');
const { PostColl } = require('../models');

const main = async () => {
    const posts = [
        {
            title: 'Seoul, South Korea',
            likes: 0,
            article: 'South Korea blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
            imgUrl: 'https://globalxnetwork.com/wp-content/uploads/2015/06/seoul-south-korea.jpg',
            reviews: [],
            comments: []
        },
        {
            title: 'Sydney, Australia',
            likes: 0,
            article: 'Sydney, Australia blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
            imgUrl: 'https://www.godsavethepoints.com/wp-content/uploads/2018/09/sydney_australia_tourist_traps2.jpeg',
            reviews: [],
            comments: []
        },
        {
            title: 'Carribean Islands',
            likes: 0,
            article: 'Carribean Islands blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
            imgUrl: 'https://image.cnbcfm.com/api/v1/image/105987422-1561490448521gettyimages-647337729.jpg?v=1561490514',
            reviews: [],
            comments: []
        },
        {
            title: 'Iceland',
            likes: 0,
            article: 'Iceland blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
            imgUrl: 'https://www.tripsavvy.com/thmb/52vDVI6lrnm3pP5oofVEsJASRUU=/4928x3280/filters:fill(auto,1)/GettyImages-553303797-5907b5e15f9b58647015b361.jpg',
            reviews: [],
            comments: []
        },
        {
            title: 'New Zealand',
            likes: 0,
            article: 'New Zealand blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
            imgUrl: 'https://www.greatearthexpeditions.com/wp-content/uploads/2019/03/adventure-beautiful-daylight-870711.jpg',
            reviews: [],
            comments: []
        }
    ];
    await PostColl.insertMany(posts);
};

const run = async () => {
    await main();
    db.close();
};

run();