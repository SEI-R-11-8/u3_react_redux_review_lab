const { comment } = require('postcss');
const { Location, Comment } = require('../models/Locations')



const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find()
        return res.status(200).json({ locations })
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }
  

const getLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const location = await Location.findById(id)
        if (location) {
            return res.status(200).json({ location });
        }
        return res.status(404).send('Location with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createLocation = async (req, res) => {
    try {
        const location = await new Location(req.body)
        await location.save()
        return res.status(201).json({ location });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        const location = await Location.findById(req.params.id)
        location.comments.push(comment.id)
        location.save()
        return res.status(201).json({ comment });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await Location.findByIdAndUpdate(id, req.body, { new: true }, (err, location) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!location) {
                res.status(500).send('location not found!');
            }
            return res.status(200).json(location);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



  module.exports = {
      getAllLocations,
      getLocationById,
      createLocation,
      updateLocation,
      deleteComment,
      getAllComments,
      createComment,
      
  }