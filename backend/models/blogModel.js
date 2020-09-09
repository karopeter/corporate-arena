 const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
   title: {
     type: String,
     required: true
   },
   authorID: {
     type: Number,
     required: true
   },
   isApproved: {
     type: Boolean,
     required: true
   },
   content: {
     type: String,
     required: true
   },
   imageUrl: {
     type: String,
     required: true
   }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;