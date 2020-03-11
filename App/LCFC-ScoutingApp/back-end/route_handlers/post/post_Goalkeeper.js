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
        var control_when_receiving = req.body.control_when_receiving;
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
        var average = 0.0;
        var points =0;
        var threshold=1;
        var playerID;
      

        ////null input to database if no value entered by scout
        
        if (handling == ''){
          var handling = null
          }
          
        if (shot_stopping == ''){
          var shot_stopping = null
          }

          
        if (tendancy_to_punch == ''){
          var tendancy_to_punch = null
          }

        if (tendancy_to_catch == ''){
            var tendancy_to_catch = null
          }
    
        
        if (positioning == ''){
            var positioning = null
        }
    
        if (recovery_saves == ''){
          var recovery_saves = null
          }

        if (control_when_recieving == ''){
            var control_when_recieving = null
          }

        if (right_foot == ''){
        var right_foot = null
        }
      
        if (left_foot == ''){
          var left_foot = null
          }

        if (dead_ball_kicks == ''){
        var dead_ball_kicks = null
        }

        
        if (kicking_out_of_hands == ''){
          var kicking_out_of_hands = null
          }

          
        if (throwing == ''){
          var throwing = null
          }

          
        if (kicking_under_pressure == ''){
          var kicking_under_pressure = null
          }

          
        if (kicking_when_given_time == ''){
          var kicking_when_given_time = null
          }

          
        if (dealing_with_crosses == ''){
          var dealing_with_crosses = null
          }

          
        if (starting_position == ''){
          var starting_position = null
          }

          
        if (one_v_one == ''){
          var one_v_one = null
          }

          
        if (dealing_with_through_ball == ''){
          var dealing_with_through_ball = null
          }

          
        if (agility == ''){
          var agility = null
          }
  
  
0
        if (reactions == ''){
        var reactions = null
        }
        
        if (strength == ''){
          var strength = null
          }

          
        if (speed == ''){
          var speed = null
          }

          
        if (bravery == ''){
          var bravery = null
          }

          
        if (leadership == ''){
          var leadership = null
          }

          
        if (presence == ''){
          var presence = null
          }

          
        if (communication == ''){
          var communication = null
          }
  
          
        if (reaction_to_mistake == ''){
          var reaction_to_mistake = null
          }
  

        ////
      
        var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });
      


        // // create and insert summary for the player report
        // //
        var attributes = [handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_receiving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake]; 
        var attributenames = ['handling', 'shot stopping', 'tendancy to punch', 'tendancy to catch', 'positioning', 'recovery saves', 'control when receiving', 'right foot', 'left foot', 'dead ball kicks', 'kicking out of hands', 'throwing', 'kicking under pressure', 'kicking when given time', 'dealing with crosses', 'starting position', 'one v one', 'dealing with through ball', 'agility', 'reactions', 'strength', 'speed', 'bravery', 'leadership', 'presence', 'communication', 'reaction to mistake']; 
        var outstandinglabel=[];
        var outstandingscore=[];
        var i;
        for (i = 0; i <= (attributes.length -1); i++) {
          if (!(isNaN(attributes[i])))
          {
            points = points + Math.round(attributes[i]);
          }
        };
        average = Math.round(points / attributes.length);
        
        
        console.log(points, average)
        var summary = last_name + ", " +first_name +" was scouted playing for "+club_name+" on "+date_played+". "+last_name+", "+first_name+" performed to grade "+rating+" with an average score of "+average+" showing some outstanding attributes";
     
        for (i = 0; i <= (attributes.length -1); i++) {
          if (!(isNaN(attributes[i]))){
            if ((attributes[i] - threshold) > average){
              outstandinglabel[i] = attributenames[i];
              outstandingscore[i] = attributes[i];
              summary += ", "+outstandinglabel[i] + " ("+outstandingscore[i]+")"
            };
          };    
        };
        summary += "."

        





        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ? AND shirt_number = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position, shirt_number], function (err, results) {
          if (err) {
            throw err;
          } else {
      
            console.log(results.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.goalkeeper_reports (player_id,scouted_by,handling,shot_stopping,tendancy_to_punch,tendancy_to_catch,positioning,recovery_saves,control_when_receiving,right_foot,left_foot,dead_ball_kicks,kicking_out_of_hands,throwing,kicking_under_pressure,kicking_when_given_time,dealing_with_crosses,starting_position,one_v_one,dealing_with_through_ball,agility,reactions,strength,speed,bravery,leadership,presence,communication,reaction_to_mistake,rating,notes,summary) VALUES ?";
            var values = [[results[0].player_id, scouted_by, handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_receiving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake, rating, notes, summary]];
      
            connect.connection.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
      
          };
      
      
        })
      }
      );

}