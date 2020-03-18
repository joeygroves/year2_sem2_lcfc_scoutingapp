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


    app.post('/api/admin/getScoutReports', (req, res) => {

        console.log("OI")

        var id = req.body.scoutID;

        connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?",
            [id,id,id,id,id,id], function (error, results, fields) {

                res.send(results);

                console.log(results);

            });



    });
}  