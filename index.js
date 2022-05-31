const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1> Samheart</h1>");
});
app.listen(port, () => {
  console.log("Backend server is running!");
});
