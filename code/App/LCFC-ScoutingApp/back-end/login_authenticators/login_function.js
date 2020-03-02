const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = function(app) {


  var connection = mysql.createConnection({

    host: 'localhost',
  
    //Enter your mySQL username here
    user: 'root',
  
    //Enter your mySQL password here
    password: 'password69%',
  
    database: 'LCFC_Scouting'
  
  });
  
  
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
  
      connection.query('SELECT * FROM staff WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
  
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