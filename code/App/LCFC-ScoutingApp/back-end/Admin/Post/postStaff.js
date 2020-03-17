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


    app.post('/api/admin/addStaff', (req, res) => {

        var username = req.body.username;
        var password = req.body.password;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var role = req.body.role;

        var StaffSQL = "INSERT INTO lcfc_scouting.staff (username, password, first_name,last_name, role) VALUES ?";
        var StaffValues = [[username, password, first_name, last_name, role]]

        connect.connection.query(StaffSQL, [StaffValues], function (err, result) {
            if (err) throw err;
        });

    });


}
