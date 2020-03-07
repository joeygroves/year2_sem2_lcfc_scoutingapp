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

    app.post('/api/striker', (req, res) => {
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var club_name = req.body.club_name;
        var height = req.body.height;
        var age = req.body.age
        var date_played = req.body.date_played;
        var club_played = req.body.club_played;
        var ht_score = req.body.ht_score;
        var ft_score = req.body.ft_score;
        var shirt_number = req.body.shirt_number;
        var position = 'Striker'
      
        var scouted_by = req.session.username
      
        //In possession
        var hold_up_play = req.body.hold_up_play;
        var receiving_under_pressure = req.body.receiving_under_pressure;
        var link_up_play = req.body.link_up_play;
        var right_foot = req.body.right_foot;
        var left_foot = req.body.left_foot;
      
        //Attacking
        var one_v_one = req.body.one_v_one;
        var aerial_ability = req.body.aerial_ability;
        var finishing = req.body.finishing;
        var right_foot_shooting = req.body.right_foot_shooting;
        var left_foot_shooting = req.body.left_foot_shooting;
        var crossing = req.body.crossing;
      
        //Defending
        var one_v_two = req.body.one_v_two;
        var tackling = req.body.tackling;
        var pressing = req.body.pressing;
        var recovering_into_shape = req.body.recovering_into_shape;
      
        //Tactical
        var agility = req.body.agility;
        var dropping_into_space = req.body.dropping_into_space;
        var runs_off_the_shoulder = req.body.runs_off_the_shoulder;
        var running_the_channels = req.body.running_the_channels;
        var movement_off_the_ball = req.body.movement_off_the_ball;
      
        //Physical
        var pace = req.body.pace;
        var mobility = req.body.mobility;
        var strength = req.body.strength;
        var work_rate = req.body.work_rate;
        var jump = req.body.jump;
      
        //Pyschological
        var bravery = req.body.bravery;
        var leadership = req.body.leadership;
        var teamwork = req.body.teamwork;
        var communication = req.body.communication;
        var response_to_criticism = req.body.response_to_criticism;
        var reaction_to_mistakes = req.body.reaction_to_mistakes;
      
        //Rating
        var rating = req.body.rating;
      
        //Comments
        var notes = req.body.notes;
        //Auto Generated Summary
        var summary = "";
        var average = 0.0;
        var points =0;
        var threshold=1;
      
        //Player Info
        var playerID;
      
      
        var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]];
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });


        // // create and insert summary for the player report
        // // 
        var attributes = [hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, aerial_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two, tackling, pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes]; 
        var attributenames = ['hold up play', 'receiving under pressure', 'link up play', 'right foot', 'left foot', 'one v one', 'aerial ability', 'finishing', 'right foot shooting', 'left foot shooting', 'crossing', 'one v two', 'tackling', 'pressing', 'recovering into shape', 'agility', 'dropping into space', 'runs off the shoulder', 'running the channels', 'movement off the ball', 'pace', 'mobility', 'strength', 'work rate', 'jump', 'bravery', 'leadership', 'teamwork', 'communication', 'response to criticism', 'reaction to mistakes']; 
        var outstandinglabel=[];
        var outstandingscore=[];
        var i;
        for (i = 0; i <= (attributes.length -1); i++) {
          points = points + Math.round(attributes[i]);
          
        };
        average = Math.round(points / attributes.length);
        
        
        console.log(points, average)
        var summary = last_name + ", " +first_name +" was scouted playing for "+club_name+" on "+date_played+". "+last_name+", "+first_name+" performed to grade "+rating+" with an average score of "+average+" showing some outstanding attributes";
     
        for (i = 0; i <= (attributes.length -1); i++) {
          if ((attributes[i] - threshold) > average){
            outstandinglabel[i] = attributenames[i];
            outstandingscore[i] = attributes[i];
            summary += ", "+outstandinglabel[i] + " ("+outstandingscore[i]+")"
          };
                   
        };
        summary += "."
        








      
        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST( ? AS DECIMAL) AND age = ? AND position = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, results) {
          if (err) {
            throw err;
          } else {
      
            console.log(results.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.striker_reports (player_id,scouted_by,hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, ariel_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two,  tackling,  pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes, summary ) VALUES ?";
            var values = [[results[0].player_id, scouted_by, hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, aerial_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two, tackling, pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes, summary]];
      
            connect.connection.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
      
          };
      
      
      
        })
      }
      );

}