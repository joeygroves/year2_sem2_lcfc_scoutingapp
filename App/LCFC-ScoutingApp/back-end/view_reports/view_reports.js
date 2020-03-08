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

app.post('/api/getPlayerDataFromPlayer', (req, res) => {

    var id = req.body.playerID;
    console.log(id)
  
    var PlayerSQL = "SELECT * from lcfc_scouting.player where player.player_id = ?";
    var PlayerValues = [[id]]
  
    connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
      if (err) {
        throw err;
  
      } else {
        res.send(result)
      }
  
    })
  
  });
  
  
  
  app.post('/api/getPlayerData', (req, res) => {
  
    var id = req.body.playerID;
    console.log(id)
  
    var PlayerSQL = "SELECT player.position AS 'Position' from lcfc_scouting.player where player.player_id = ?";
    var PlayerValues = [[id]]
  
    connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
      if (err) {
        throw err;
  
      } else {
  
        if (result[0].Position == 'Goalkeeper') {
  
          var GoalkeeperSQL = "SELECT * FROM goalkeeper_reports where goalkeeper_reports.player_id = ?"
          var GoalkeerpSQLID = [[req.body.playerID]]
  
          connect.connection.query(GoalkeeperSQL, [GoalkeerpSQLID], function (err, result) {
  
            if (err) {
  
              throw err;
  
            } else {
  
              res.send(result)
            }
  
          })
  
        } else if (result[0].Position == 'Full Back') {
  
          var FullBackSQL = "SELECT * FROM LCFC_Scouting.full_back_reports WHERE player_id = ?"
          var FullBackSQLValues = [[req.body.playerID]]
  
          connect.connection.query(FullBackSQL, [FullBackSQLValues], function (err, result) {
            if (err) {
  
              throw err;
  
            } else {
              console.log(result)
  
              res.send(result)
            }
  
          })
        } else if (result[0].Position == 'Wide Midfielder') {
  
          var WMSQL = "SELECT * FROM wide_midfielder_reports where wide_midfielder_reports.player_id = ?"
          var WMSQLValues = [[req.body.playerID]]
  
          connect.connection.query(WMSQL, [WMSQLValues], function (err, result) {
            if (err) {
  
              throw err;
  
            } else {
              console.log(result)
              res.send(result)
            }
  
          })
        } else if (result[0].Position == 'Centre Midfielder') {
  
          var CMSQL = "SELECT * FROM centre_midfielder_reports where centre_midfielder_reports.player_id = ?"
          var CMSQLVALUES = [[req.body.playerID]]
  
          connect. connection.query(CMSQL, [CMSQLVALUES], function (err, result) {
            if (err) {
  
              throw err;
  
            } else {
              console.log(result)
              res.send(result)
            }
  
          })
        } else if (result[0].Position == 'Striker') {
  
          var StrikerSQL = "SELECT * FROM striker_reports where striker_reports.player_id = ?"
          var StrikerSQLValues = [[req.body.playerID]]
  
          connect.connection.query(StrikerSQL, [StrikerSQLValues], function (err, result) {
            if (err) {
  
              throw err;
  
            } else {
              console.log(result)
              res.send(result)
            }
  
          })
        } else if (result[0].Position == 'Centre Back') {
  
          var CentreBackSQL = "SELECT * FROM centre_back_reports where centre_back_reports.player_id = ?"
          var CentreBackSQLID = [[req.body.playerID]]
  
          connect.connection.query(CentreBackSQL, [CentreBackSQLID], function (err, result) {
            if (err) {
  
              throw err;
  
            } else {
              console.log(result)
  
              res.send(result)
            }
  
          })
        }
      }
    });
  
    connect.connection.close
  })
}