const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postImg: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
