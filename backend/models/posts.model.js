const mongoose = require('mongoose');
const commentSchema = require('./comment.model').schema;

const postSchema = new mongoose.Schema ({
  title: String,
  purpose: String,
  body: String,
  comments: [commentSchema],
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