const posts = require('./Posts');

module.exports = {
  findById: (id) => posts.find(post => post.id === id)
}