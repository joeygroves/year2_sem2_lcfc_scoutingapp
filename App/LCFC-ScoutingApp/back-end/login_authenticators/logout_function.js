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


  app.get('/api/LogOutAuthentication', (req, res) => {

    if (req.session.loggedin) {
  
      req.session.loggedin = false;
  
      res.send("LoggedOut");
  
    } else {
  
      res.send("NotSignedIn");
  
    }
  
    res.end();
  
  });

}