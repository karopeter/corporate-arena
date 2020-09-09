const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/corporate-arena')
 .then(() => {
   console.log('DB Connection Successful!');
 }).catch(() => {
   console.log('Connecion failed!');
 });


// 1) GLOBAL MIDDLEWARES
app.use('/static', express.static(path.join(__dirname, 'src')));

// Set Security HTTP headers
app.use(helmet());


// Developing Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});


// 3) ROUTES
app.use('/api/v1/Article', blogRoutes);

module.exports = app;
