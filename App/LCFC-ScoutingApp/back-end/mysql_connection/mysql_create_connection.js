const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;
var mysql = require("mysql");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host: "localhost",

  //Enter your mySQL username here
  user: "root",

  //Enter your mySQL password here
  password: "Inazuma11Orion",

  database: "lcfc_scouting"
});

app.use(
  session({
    secret: "secret",

    resave: true,

    saveUninitialized: true
  })
);

module.exports.connection = connection;
