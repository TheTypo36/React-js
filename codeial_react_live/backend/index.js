const express = require("express");
const port = 3000;

const app = express();
const db = require("./config/mongoose");
const Post = require("./models/post");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", require("./routes.js/index"));
app.listen(port, function (err) {
  if (err) {
    console.log("error", err);
  }
  console.log(`server is fired up on ${port} port`);
});
