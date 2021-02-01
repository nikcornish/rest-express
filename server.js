const express = require('express'),
      app = express(),
      posts = require('./posts'),
      ROUTES = require('./routes'),
      logger = require('./logger');

app.use(logger);

app.listen(3000, () => console.log('listening on 3000', __dirname));

// Get all posts
app.get(ROUTES.POSTS, (req, res) => {
  res.json(posts);
});

// Get single post
app.get(ROUTES.POST, (req, res) => {
  const post = posts.filter(post => post.id === parseInt(req.params.id));
  if(post.length === 1) {
    res.json(post);
  } else {
    res.status(400).json({ msg: `Post with id ${req.params.id} not found.`});
  }
});