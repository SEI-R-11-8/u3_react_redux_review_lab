const { Comment } = require('../models')

const addComment = async (req, res) => {
    console.log(req.body)
    let allComment = await Comment.insertMany(req.body);
    res.status(201).send(`Successfully inserted ${allComment}`)
};


const insetComment = async (req, res) => {
    let allComment = await Comment.find(req.body);
    res.status(201).send(`Successfully inserted ${allComment}`)
};

module.exports={
    addComment,
    insetComment
}