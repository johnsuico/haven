const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
  title: String,
  purpose: String,
  body: String,
  upvote: {
    type: Number,
    default: 0
  },
  downvote: {
    type: Number,
    default: 0
  }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;