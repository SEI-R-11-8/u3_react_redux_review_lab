const Post = require('../models/post')
const Comment = require('../models/comment')

const createComment = async (req, res) => {
    try{
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment
        });
    } catch(error){
        return res.status(500).json({ error: error.message })
    }
}

const getComments = async (req, res) => {
    try{
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const getPosts = async (req, res) => {
    try{
        const posts = await Post.find()
        return res.status(200).json({ posts })
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const getPostsById = async (req, res) => {
    try{
        const { id } = req.params
        const post = await Post.findById(id)
        if(post) {
            return res.status(200).json({ post })
        }
        return res.status(404).send('Post with specific id does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createComment,
    getComments,
    getPosts,
    getPostsById
}