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
   },
   dateCreated: {
     type: Date,
     default: Date.now(),
     select: false
   },
   dateModified: {
     type: Date,
     default: Date.now(),
   }
});

// Query Middleware
blogSchema.pre(/^find/, function(next) {
   this.dateCreated = Date.now();
   next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
