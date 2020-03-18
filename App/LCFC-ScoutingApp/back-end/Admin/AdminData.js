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



  app.post('/api/getScoutRole', (req, res) => {

    var SQLStatement = "SELECT role FROM staff where username = ?"
  
    connect.connection.query(SQLStatement, [req.session.username], function (err, result) {
  
      if (err) {
  
        throw err;
  
      } else {
      
        console.log(result[0].role)

        res.send(result[0].role);

        
      }
  
    })
  
  });
}