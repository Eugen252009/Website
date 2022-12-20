const port = 9005;
const express = require("express");
const app = express();
const react = require("react");
const reactDOM = require("react-dom");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "public/assets/style"));

app
  .route("/")
  .get((req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
  })
  .put((req, res) => {});
app.route("/cv").get((req, res) => {
  res.sendFile(__dirname + "/public/html/cv.html");
});
app.route("/about").get((req, res) => {
  res.sendFile(__dirname + "/public/html/about.html");
});
app.route("/contact").get((req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});
app.route("/gaming").get((req, res) => {
  res.sendFile(__dirname + "/public/html/gaming.html");
});
app.route("/impressum").get((req, res) => {
  res.sendFile(__dirname + "/public/html/impressum.html");
});
app.route("/legal").get((req, res) => {
  res.sendFile(__dirname + "/public/html/legal.html");
});
app.listen(port, console.log("server has started on Port " + port));
