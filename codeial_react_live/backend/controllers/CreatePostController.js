const Post = require("../models/post");
var postList = [
  {
    postImg:
      "https://image.shutterstock.com/z/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg",
    caption: "A day well spent in the nature",
  },
  {
    postImg:
      "https://image.shutterstock.com/image-photo/21052021-riga-latvia-car-drifting-600w-1979355056.jpg",
    caption: "look at that beast!!",
  },
];

module.exports.create = function (req, res) {
  for (let post of postList) {
    console.log(post.caption);
    Post.create(
      {
        postImg: post.postImg,
        caption: post.caption,
      },
      function (err, newPost) {
        if (err) {
          console.log("error", err);
          return;
        }
        console.log("newPost added", newPost);
      }
    );
  }
  return res.back();
};
