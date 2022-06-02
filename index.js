const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Blog = require("./models/PostModel");
const port = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost:27017/the_new_text")
  .then((result) => console.log("connect db"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get("/testing_blog", (req, res) => {
  // we want to first create the instance of the blog
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      // res.render("index");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(express.static(path.join(__dirname, "/my-app")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/my-app/build/", "index.html"));
});

app.listen(port, () => {
  console.log("Backend server is running!");
});
