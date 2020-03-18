const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connect = require('../../mysql_connection/mysql_create_connection');

module.exports = function (app) {


  app.use(session({

    secret: 'secret',

    resave: true,

    saveUninitialized: true

  }));


  app.post('/api/admin/getStaff', (req, res) => {

    connect.connection.query('SELECT * FROM staff  ', function (error, results, fields) {


      if (error) {
  
        throw error;
  
      } else {
      console.log(results)
        res.send(results);

        
      }

    });
    

  });
}  