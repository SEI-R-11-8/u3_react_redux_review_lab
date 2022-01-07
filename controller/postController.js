const { Blog } = require('../models')

const getAllBlog = async (req, res)=>{
    let allBlog = await Blog.find();
    res.status(201).send(allBlog);
};

module.exports = {
    getAllBlog
}