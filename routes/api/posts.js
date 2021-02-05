const posts = require('../../Posts'),
      express = require('express'),
      router = express.Router(),
      uuid = require('uuid');


function findById(id) {
  return posts.find(post => post.id === id);
}

/////////
// CREATE
/////////

// Create a post
router.post('/', (req, res) => {
  const newPost = {
    id: uuid.v4(),
    title: req.body.title
  };
  if(!newPost.title) {
    return res.status(400).json({ msg: "Please enter a title." })
  }
  posts.push(newPost);
  res.json(posts);
});



///////
// READ
///////

// Get all posts
router.get('/', (req, res) => res.json(posts));

// Get a single post via id
router.get('/:id', (req, res) => {
  const post = findById(req.params.id);
  post ? 
    res.json(post) : 
    res.status(400).json({ msg: `Post with id ${req.params.id} not found.`})
});



/////////
// UPDATE
/////////

// Update a single post via id
router.put('/:id', (req, res) => {
  const found = findById(req.params.id);
  found ?
    posts.forEach(post => {
      if(post.id === req.params.id) {
        post.title = req.body.title ? req.body.title : post.title
        res.json(post);
      }
    }) : 
    res.status(400).json({ msg: `Post with id ${req.params.id} not found.`});
});



/////////
// DELETE
/////////

router.delete('/:id', (req, res) =>  {
  const found = findById(req.params.id);
  if(found) {
    posts.splice(posts.findIndex(post => post.id === req.params.id), 1);
    res.json(posts);
  }
});

module.exports = router;