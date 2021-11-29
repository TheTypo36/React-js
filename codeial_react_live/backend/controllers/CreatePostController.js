const Post = require("../models/post");
var postList = [
  {
    postImg:
      "https://image.shutterstock.com/z/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg",
    content: "A day well spent in the nature",
    authorName: "Ashish Raghuvanshi",
    likes: 20000,
    comments: 14000,
  },
  {
    postImg:
      "https://image.shutterstock.com/image-photo/21052021-riga-latvia-car-drifting-600w-1979355056.jpg",
    content: "look at that beast!!",
    authorName: "Anand Raghuvanshi",
    likes: 5000,
    comments: 1400,
  },
  {
    postImg:
      "https://nationaltoday.com/wp-content/uploads/2020/02/national-clean-out-your-computer-day.jpg",
    content: "Nation Clean Your Computer day!!",
    authorName: "Yash Sihna",
    likes: 100,
    comments: 10,
  },
  {
    postImg:
      "https://rideofy.com/wp-content/uploads/2020/06/home-slider_10.jpg",
    content: "Isn't she classic, huh!!",
    authorName: "Aditya Raj Singh",
    likes: 50,
    comments: 5,
  },
  {
    postImg:
      "https://blog.majorkalshiclasses.com/wp-content/uploads/2020/11/NDA-CDS-And-AFCAT-SSB-Centers-In-India-1-compressed.jpg",
    content: "FINALLY CRACKED SSB OF THE AFCAT",
    authorName: "RANDOM DUDE",
    likes: 200,
    comments: 54,
  },
];

module.exports.create = function (req, res) {
  for (let post of postList) {
    console.log(post.content);
    Post.create(
      {
        postImg: post.postImg,
        content: post.content,
        authorName: post.authorName,
        likes: post.likes,
        comments: post.comments,
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
  return res.redirect("/");
};
