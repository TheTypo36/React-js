const Post = require("../models/post");
var arr;
module.exports.home = function (req, res) {
  Post.find({}, function (err, posts) {
    console.log(posts);
    return res.status(200).send(posts);
  });
};
