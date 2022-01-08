const mongoose = require("mongoose")
const Schema = mongoose.Schema



const locationSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String},
    image: [{type: String}],
    description: {type: String},
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}],
    rating: [{type: Number}]
});




const commentSchema = new Schema({
    authorName: {type: String},
    comment: {type: String},
});


const Location = mongoose.model('Location', locationSchema)
const Comment = mongoose.model('Comment', commentSchema)
module.exports = {
    Location,
    Comment,
    
}