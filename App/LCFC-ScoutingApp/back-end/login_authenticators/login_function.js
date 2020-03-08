const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connect = require('../mysql_connection/mysql_create_connection');

module.exports = function(app) {

  app.use(session({
  
    secret: 'secret',
  
    resave: true,
  
    saveUninitialized: true
  
  }));


  app.post('/api/LogInAuthentication', (req, res) => {

    console.log(req.body);
  
    var username = req.body.username;
  
    var password = req.body.password;
  
    if (username && password) {
  
      connect.connection.query('SELECT * FROM staff WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
  
        if (results.length > 0) {
  
          req.session.loggedin = true;
  
          req.session.username = username;
  
          res.send("LoggedIn");
  
        } else {
  
          res.send("IncorrectUsernameOrPassword");
  
        }
  
      });
  
    } else {
  
      res.send("Empty");
  
    }
  
  });

}