const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// Models
const postModel = require('./models/posts.model');

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
  console.log("Successfully connected to MongoDB");
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: '));

app.get('/api/haven', (req, res) => {
  postModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

app.post('/api/haven', (req, res) => {
  const title = req.body.title;
  const purpose = req.body.purpose;
  const body = req.body.body;

  const post = new postModel ({
    title: title,
    purpose: purpose,
    body: body
  })

  post.save((err) => {
    if(err) {
      res.send("Could not save the post. Err: " + err);
    } else {
      res.send("Successfully saved");
    }
  })
})

app.delete('/api/haven', (req, res) => {
  postModel.deleteMany({} ,(err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send("Successfully deleted all havens");
    }
  });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Backend server started on port: " + process.env.PORT);
});