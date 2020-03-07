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


module.exports = function(app) {

    app.post('/api/goalkeeper', (req, res) => {

        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var club_name = req.body.club_name;
        var height = req.body.height;
        var age = req.body.age
        var date_played = req.body.date_played;
        var club_played = req.body.club_played;
        var ht_score = req.body.ht_score;
        var ft_score = req.body.ft_score;
        var position = 'Goalkeeper'
        var shirt_number = req.body.shirt_number;
      
        var scouted_by = req.session.username
        var handling = req.body.handling;
        var shot_stopping = req.body.shot_stopping;
        var tendancy_to_punch = req.body.tendancy_to_punch;
        var tendancy_to_catch = req.body.tendancy_to_catch;
        var positioning = req.body.positioning;
        var recovery_saves = req.body.recovery_saves;
        var control_when_recieving = req.body.control_when_recieving;
        var right_foot = req.body.right_foot;
        var left_foot = req.body.left_foot;
        var dead_ball_kicks = req.body.dead_ball_kicks;
        var kicking_out_of_hands = req.body.kicking_out_of_hands;
        var throwing = req.body.throwing;
        var kicking_under_pressure = req.body.kicking_under_pressure;
        var kicking_when_given_time = req.body.kicking_when_given_time;
        var dealing_with_crosses = req.body.dealing_with_crosses;
        var starting_position = req.body.starting_position;
        var one_v_one = req.body.one_v_one;
        var dealing_with_through_ball = req.body.dealing_with_through_ball;
        var agility = req.body.agility;
        var reactions = req.body.reactions;
        var strength = req.body.strength;
        var speed = req.body.speed;
        var bravery = req.body.bravery;
        var leadership = req.body.leadership;
        var presence = req.body.presence;
        var communication = req.body.communication;
        var reaction_to_mistake = req.body.reaction_to_mistake;
        var rating = req.body.rating;
        var notes = req.body.notes;
        var summary = "";
        var average = 0;
        var points =0;
        var threshold=1;
        var playerID;
      
      
        var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });
      


        // // create and insert summary for the player report
        // // how do I get variable label from array?S
        // var attributes = [handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_recieving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake]; 
        // var i;
        // for (i = 0; i < attributes.length; i++) {
        //   points += attributes[i];
          
        // };
        // average = points / attributes.length;

        // var summary = firstname + lastname +" was scouted playing for "+club_name+" on "+date_played+". "+firstname+lastname+" performed to grade "+rating+" with an average score of "+average+"+ showing some outstanding attributes";
     
        // for (i = 0; i < attributes.length; i++) {
        //   if ((attributes[i] + threshold) > average){
        //     outstandinglabel[i] = attributes[i];
        //     outstandingscore[i] = attributes[i];
        //     summary += ", "+outstandinglabel[i] + " ("+outstandingscore[i]+")"
        //   };
        //   summary += "."
          
        // };
        
        





        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ? AND shirt_number = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position, shirt_number], function (err, results) {
          if (err) {
            throw err;
          } else {
      
            console.log(results.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.goalkeeper_reports (player_id,scouted_by,handling,shot_stopping,tendancy_to_punch,tendancy_to_catch,positioning,recovery_saves,control_when_receiving,right_foot,left_foot,dead_ball_kicks,kicking_out_of_hands,throwing,kicking_under_pressure,kicking_when_given_time,dealing_with_crosses,starting_position,one_v_one,dealing_with_through_ball,agility,reactions,strength,speed,bravery,leadership,presence,communication,reaction_to_mistake,rating,notes,summary) VALUES ?";
            var values = [[results[0].player_id, scouted_by, handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_recieving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake, rating, notes, summary]];
      
            connect.connection.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
      
          };
      
      
        })
      }
      );

}