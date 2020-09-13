class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
      // Build the query
      const queryObj = { ...this.queryString };
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach(el => delete queryObj[el]);
 
      // Advanced filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
 
      this.query = this.query.find(JSON.parse(queryStr));
      return this;
  }

  sort() {
     if (this.queryString) {
      const sortBy = this.queryString.sort.split(', ').join(' ');
      this.query = this.query.sort(req.query.sort);
    } else {
      this.query = this.query.sort('-createAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-_v');
    }
    return this;
  }

  paginate() {
     const page = req.query.page * 1 || 1;
     const limit = req.query.limit * 1 || 100;
     const skip = (page - 1) * limit;

     this.query = this.query.skip(skip).limit(limit);

     return this;
  }
}

module.exports = APIFeatures;