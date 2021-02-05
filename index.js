const express = require('express'),
      app = express(),
      logger = require('./logger'),
      postRoutes = require('./routes/api/posts')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);

app.use('/api/posts', postRoutes);

app.listen(3000, () => console.log('listening on 3000', __dirname));