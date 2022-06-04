const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const authRoute = require("./routes/authRoute");

mongoose
  .connect("mongodb://localhost:27017/techstudio")
  .then((result) => console.log("connect db"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  // res.json("")
  res.send("<h1> Samheart</h1>");
});

app.get("/", (req, res) => {
  // res.json("")
  let data = [
    { name: "tunde", id: 1 },
    { name: "emeka", id: 2 },
    { name: "kaka", id: 3 },
    { name: "peter", id: 4 },
  ];
  res.json(data);
});

app.use("/api/auth", authRoute);

// this is new
app.listen(port, () => {
  console.log("Backend server is running!");
});
