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


  app.post('/api/GetScoutsReports', (req, res) => {


    var userRole = "";

    if (req.session.loggedin) {

      console.log(" Role  " + req.session.username)

      connect.connection.query('SELECT role FROM staff WHERE username = ? ', [req.session.username], function (error, results, fields) {

        userRole = results[0].role


        console.log(" ROle " + userRole)

        if (userRole === "Scout") {

          connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?",
            [req.session.username, req.session.username, req.session.username, req.session.username, req.session.username, req.session.username], function (error, results, fields) {

              res.send(results);

              console.log(results);

            });

        } else {

          connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id  union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id",
            function (error, results, fields) {

              res.send(results);

              console.log(results);

            });

        }

      });

    } else {

      console.log('Wrong');

      res.send("Not Logged In");

    }

  });



  app.post('/api/filteredReports', (req, res) => {


    var rating_filter = req.body.rating_filter;

    var position_filter = req.body.position_filter;

    connect.connection.query('SELECT role FROM staff WHERE username = ? ', [req.session.username], function (error, results, fields) {

      userRole = results[0].role

      if (userRole === "Scout") {

        if ((rating_filter == "Blank") && (position_filter == "Blank")) {

          connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?",
            [req.session.username, req.session.username, req.session.username, req.session.username, req.session.username, req.session.username], function (error, results, fields) {
              res.send(results);

            })
        } else if ((rating_filter != "Blank") && (position_filter == "Blank")) {

          connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? and goalkeeper_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? and wide_midfielder_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? and centre_back_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? and centre_midfielder_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? and full_back_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ? and striker_reports.rating = ?",
            [req.session.username, rating_filter, req.session.username, rating_filter, req.session.username, rating_filter, req.session.username, rating_filter, req.session.username, rating_filter, req.session.username, rating_filter], function (error, results, fields) {

              res.send(results);

              console.log(results);

            });


        } else if (((rating_filter == "Blank") && (position_filter != "Blank"))) {

          if (position_filter == "Goalkeeper") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? "
            values = [req.session.username]

            connect.connection.query(sqlStatement, [values], function (error, results, fields) {

              res.send(results)


            })

          } else if (position_filter == "Wide Midfielder") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? "
            values = [req.session.username]

            connect.connection.query(sqlStatement, [values], function (error, results, fields) {

              res.send(results)

            })


          } else if (position_filter == "Centre Back") {


            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ?"

            values = [req.session.username]

            connect.connection.query(sqlStatement, [values], function (error, results, fields) {

              res.send(results)

            })




          } else if (position_filter == "Centre Midfield") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? "
            values = [req.session.username]

            connect.connection.query(sqlStatement, [values], function (error, results, fields) {

              res.send(results)

            })

          } else if (position_filter == "Full Back") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ?"
            values = [req.session.username]


            connect.connection.query(sqlStatement, [values], function (error, results, fields) {

              res.send(results)

            })

          } else {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?"
            values = [req.session.username]


            connect.connection.query(sqlStatement, [values], function (error, results, fields) {

              res.send(results)

            })

          }

        } else {

          if (position_filter == "Goalkeeper") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? and goalkeeper_reports.rating = ? "

            connect.connection.query(sqlStatement, [req.session.username, rating_filter], function (error, results, fields) {

              if (error) console.log(error);

              res.send(results)

            })

          }
          else if (position_filter == "Wide Midfielder") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? and wide_midfielder_reports.rating = ?"

            connect.connection.query(sqlStatement, [req.session.username, rating_filter], function (error, results, fields) {

              if (error) console.log(error);

              res.send(results)

            })
          }
          else if (position_filter == "Centre Back") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by =? and centre_back_reports.rating =?"

            connect.connection.query(sqlStatement, [req.session.username, rating_filter], function (error, results, fields) {

              if (error) console.log(error);

              res.send(results)

              res.end()

            })
          }
          else if (position_filter == "Centre Midfield") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by =? and centre_midfielder_reports.rating =?"

            connect.connection.query(sqlStatement, [req.session.username, rating_filter], function (error, results, fields) {

              if (error) console.log(error);

              res.send(results)

            })
          }
          else if (position_filter == "Full Back") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by =? and full_back_reports.rating =?"


            connect.connection.query(sqlStatement, [req.session.username, rating_filter], function (error, results, fields) {

              if (error) console.log(error);

              res.send(results)

            })
          } else if (position_filter == "Striker") {

            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by =? and striker_reports.rating =?"


            connect.connection.query(sqlStatement, [req.session.username, rating_filter], function (error, results, fields) {

              if (error) console.log(error);

              res.send(results)

            })
          }



        }

      } else {

        if ((rating_filter == "Blank") && (position_filter == "Blank")) {
          connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id  union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id",
           function (error, results, fields) {
              
            res.send(results);

            })

        } else if ((rating_filter != "Blank") && (position_filter == "Blank")) {

          connect.connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.rating = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.rating = ?",
            [rating_filter,rating_filter,rating_filter,rating_filter,rating_filter,rating_filter], function (error, results, fields) {
              res.send(results);
              console.log(results);
            });

        } else if (((rating_filter == "Blank") && (position_filter != "Blank"))) {
          if (position_filter == "Goalkeeper") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id "
            values = [req.session.username]
            connect.connection.query(sqlStatement, [values], function (error, results, fields) {
              res.send(results)
            })
          } else if (position_filter == "Wide Midfielder") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id "
            values = [req.session.username]
            connect.connection.query(sqlStatement, [values], function (error, results, fields) {
              res.send(results)
            })
          } else if (position_filter == "Centre Back") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id "
            values = [req.session.username]
            connect.connection.query(sqlStatement, [values], function (error, results, fields) {
              res.send(results)
            })
          } else if (position_filter == "Centre Midfield") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id"
            values = [req.session.username]
            connect.connection.query(sqlStatement, [values], function (error, results, fields) {
              res.send(results)
            })
          } else if (position_filter == "Full Back") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id"
            values = [req.session.username]
            connect.connection.query(sqlStatement, [values], function (error, results, fields) {
              res.send(results)
            })
          } else {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id "
            values = [req.session.username]
            connect.connection.query(sqlStatement, [values], function (error, results, fields) {
              res.send(results)
            })
          }
        } else {
          
          if (position_filter == "Goalkeeper") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.rating = ? "
            connect.connection.query(sqlStatement, [rating_filter], function (error, results, fields) {
              if (error) console.log(error);
              res.send(results)
            })
          }
          
          else if (position_filter == "Wide Midfielder") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.rating = ?"
            connect.connection.query(sqlStatement, [rating_filter], function (error, results, fields) {
              if (error) console.log(error);
              res.send(results)
            })
          }
          
          else if (position_filter == "Centre Back") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.rating = ?"
            connect.connection.query(sqlStatement, [rating_filter], function (error, results, fields) {
              if (error) console.log(error);
              res.send(results)
              res.end()
            })
          }
          
          else if (position_filter == "Centre Midfield") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and and centre_midfielder_reports.rating =?"
            connect.connection.query(sqlStatement, [rating_filter], function (error, results, fields) {
              if (error) console.log(error);
              res.send(results)
            })
          }
         
          else if (position_filter == "Full Back") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.rating = ?"
            connect.connection.query(sqlStatement, [rating_filter], function (error, results, fields) {
              if (error) console.log(error);
              res.send(results)
            })
          
          } else if (position_filter == "Striker") {
            sqlStatement = "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.rating =?"
            connect.connection.query(sqlStatement, [rating_filter], function (error, results, fields) {
              if (error) console.log(error);
              res.send(results)
            })
          }
        }


      }
    })

  });


}  