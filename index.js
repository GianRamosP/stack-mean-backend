const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kalexcz:pYCInxTs5traX419@cluster0.sqyoare.mongodb.net/test"
  )
  .then(() => console.log("Connected..!"));

app.get("/", function (req, res) {
  res.send("Hello W0rld");
});

app.get("/contact", function (req, res) {
  res.send("Contact page");
});

app.get("/about", function (req, res) {
  res.send("About page");
});

app.get("/service", function (req, res) {
  res.send("Service page");
});

app.get("/api", function (req, res) {
  res.send("API page");
});

app.listen(3000);
