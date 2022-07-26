const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/yating/:friend", (req, res) => {
  res.send("my best friend is " + req.params.friend);
});

app.post("/formHandling", (req, res) => {
  let { fullname, age } = req.body;
  res.send(`thanks for posting. Your name is ${fullname} and age is ${age}`);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
