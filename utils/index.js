const posts = require('../data/posts');

// find a post via id
const findById = (id) => posts.find(post => post.id === id)

// log infos in console
const logger = (req, res, next) => {
  console.log(`${req.get('host')}`);
  console.log(`${req.originalUrl}`);  
  next();
}

module.exports = {
  findById,
  logger
}

