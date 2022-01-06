const { Comment, Review, Destination } = require('../models/index')

const getDestinations = async (req, res) => {
    try {
        const destination = await Destination.find()
        return res.status(200).json({ destination })
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const getById = async (req, res) => {
    try {
        const {id} = req.params
        const comment = await Comment.findById(id)
        const review = await Review.findById(id)
        const destination = await Destination.findById(id)
        if(comment) {
            return res.status(200).json({ comment })
        } else if(review){
            return res.status(200).json({ review })
        } else if(destination){
            return res.status(200).json({ destination })
        }

        return res.status(404).send('This does not exists')
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const postComment = async (req, res) => {
    try{
        const comment = await Comment.create(req.body)
        await comment.save()
        return res.status(201).json({ comment })
    }catch(error){
        return res.status(500).json({ error: error.message })
    }
}

const postReview = async (req, res) => {
    try{
        const review = await Comment.create(req.body)
        await review.save()
        return res.status(201).json({ review })
    }catch(error){
        return res.status(500).json({ error: error.message })
    }
}

const deleteById = async (req,res) => {
    try {
        const { id } = req.params
        const delReview = await Review.findByIdAndDelete(id)
        const delComment = await Comment.findByIdAndDelete(id)
        if(delReview) {
            return res.status(200).send('Review deleted')
        } else if(delComment) {
            return res.status(200).send('Comment deleted')
        }
        throw new Error('Product not found')
    }catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getDestinations,
    getById,
    postComment,
    postReview,
    deleteById,
}