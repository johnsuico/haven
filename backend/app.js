const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

// Models
const postModel = require('./models/posts.model');

app.use(express.json());
app.use(cors());

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

app.get('/api/haven/:id', (req, res) => {
  postModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send("Could not find the specific haven: " + req.params.id);
    } else {
      res.send(result)
    }
  })
});

app.put('/api/haven/upvote/:id', (req, res) => {
  postModel.findOneAndUpdate({_id: req.params.id}, {$inc: {upvote: 1}}, (err) => {
    if(err) {
      res.send(err);
    } else {
      res.send('Updated upvote');
    }
  })
});

app.put('/api/haven/downvote/:id', (req, res) => {
  postModel.findOneAndUpdate({_id: req.params.id}, {$inc: {downvote: 1}}, (err) => {
    if(err) {
      res.send(err);
    } else {
      res.send('Updated upvote');
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

app.delete('/api/haven/:id', (req, res) => {
  postModel.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.send("Could not delete haven: " + req.params.id);
    } else {
      res.send("Successfully deleted haven: " + req.params.id);
    }
  })
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Backend server started on port: " + process.env.PORT);
});