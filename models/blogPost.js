const { Schema } = require('mongoose');

const BlogSchema = new Schema(
  {
    date: { type: String, required: true },
    blog_post: { type: String, required: true}
    
  },
  { timestamps: true }
);

module.exports = BlogSchema;