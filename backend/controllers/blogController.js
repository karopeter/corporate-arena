const Blog = require('./../models/blogModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllBlogs = async (req, res) => {
   try {
     // Execute Query
     const features = new APIFeatures(Blog.find(), req.query).filter().sort().limitFields().paginate();
     
     const blogs = await features.query;

     res.status(200).json({
      status: 'success',
      results: blogs.length,
      data: {
        blogs
      }
     });
   } catch (err) {
     res.status(404).json({
       status: 'fail',
       message: err
     });
   }
};

exports.getBlog = async (req, res) => {
   try {
     const blog = await Blog.findById(req.params.id);

     res.status(200).json({
       status: 'success',
       data: {
         blog
       }
     });
   } catch (err) {
     res.status(404).json({
      status: 'fail',
      message: err
     });
   }
};


exports.createBlog = async (req, res) => {
    try {
      const newBlog = await Blog.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          blog: newBlog
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: 'Invalid data sent!'
      });
    }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        blog
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

exports.deleteBlog = async (req, res) => {
   try {
     const blog = await Blog.findByIdAndDelete(req.params.id);

     res.status(204).json({
       status: 'success',
       data: null
     });
   } catch (err) {
     res.status(404).json({
       status: 'fail',
       message: err
     });
   }
};
