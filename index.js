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

app.get("/test", (req, res) => {
  // res.json("")
  res.send("<h1> Samheart</h1>");
});

app.get("/", (req, res) => {
  // res.json("")
  let data = [
    { name: "tunde" },
    { name: "emeka" },
    { name: "kaka" },
    { name: "peter" },
  ];
  res.json(data);
});

// this is new
app.listen(port, () => {
  console.log("Backend server is running!");
});
