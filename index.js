const express = require('express'),
      app = express(),
      utils = require('./utils'),
      postRoutes = require('./routes/api/posts')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(utils.logger);

// for this url, use postRoutes
app.use('/api/posts', postRoutes);

app.listen(3000, () => console.log('listening on 3000', __dirname));