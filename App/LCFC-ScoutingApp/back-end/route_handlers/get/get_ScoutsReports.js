const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;
var mysql = require("mysql");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "seanraisi@gmail.com",
    pass: "Inazuma11Orion!"
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connect = require("../../mysql_connection/mysql_create_connection");

module.exports = function(app) {
  app.use(
    session({
      secret: "secret",

      resave: true,

      saveUninitialized: true
    })
  );

  app.post("/api/GetScoutsReports", (req, res) => {
    if (req.session.loggedin) {
      connect.connection.query(
        "select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position' from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position'  from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?",
        [
          req.session.username,
          req.session.username,
          req.session.username,
          req.session.username,
          req.session.username,
          req.session.username
        ],
        function(error, results, fields) {
          res.send(results);

          console.log(results);
        }
      );
      var to_list = [];

      var mailOptions = {
        from: "seanraisi@gmail.com",
        to: "seanraisi@hotmail.co.uk",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
        attachments: [
          {
            filename: "test.csv",
            content: "Name",
            content: "Club"
          }
        ]
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } else {
      console.log("Wrong");

      res.send("Not Logged In");
    }
  });
};
