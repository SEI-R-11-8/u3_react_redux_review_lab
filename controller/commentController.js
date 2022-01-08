const { Comment } = require('../models')

const addComment = async (req, res) => {
   
    let createdComment = await Comment.create(req.body);
    
    res.status(201).send( createdComment)
};


const insetComment = async (req, res) => {
    let allComment = await Comment.find(req.body);
    
    res.status(201).send(allComment)
};

module.exports={
    addComment,
    insetComment
}