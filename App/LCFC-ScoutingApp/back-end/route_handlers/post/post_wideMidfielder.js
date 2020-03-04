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

    app.post('/api/widemidfielder', (req, res) => {

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
        var position = 'Wide Midfielder'
      
        var scouted_by = req.session.username;
        var control = req.body.control;
        var receiving_under_pressure = req.body.receiving_under_pressure;
        var short_passing = req.body.short_passing;
        var switching_play = req.body.switching_play;
        var right_foot = req.body.right_foot;
        var left_foot = req.body.left_foot;
        var attacking_one_v_one = req.body.one_vs_one_attacking;
        var attacking_ariel_ability = req.body.attacking_ariel_ability;
        var dribbling = req.body.dribbling;
        var shooting = req.body.shooting;
        var crossing = req.body.crossing;
        var defending_one_v_one = req.body.one_vs_one_defending;
        var defending_ariel_ability = req.body.defending_ariel_ability;
        var supporting_full_back = req.body.supporting_full_back;
        var tackling = req.body.tackling;
        var pressing = req.body.pressing;
        var positional_awareness = req.body.positional_awareness;
        var recovery_runs = req.body.recovery_runs;
        var tracking_runners = req.body.tracking_runners;
        var agility = req.body.agility;
        var coming_in_off_the_line = req.body.coming_in_off_the_line;
        var finding_space_out_wide = req.body.finding_space_out_wide;
        var link_up_with_full_back = req.body.link_up_with_full_back;
        var willingness_to_get_forward = req.body.willingness_to_get_forward;
        var pace = req.body.pace;
        var speed_when_dribbling = req.body.dribbling;
        var strength = req.body.strength;
        var work_rate = req.body.work_rate;
        var bravery = req.body.bravery;
        var leadership = req.body.leadership;
        var teamwork = req.body.team_work;
        var communication = req.body.communication;
        var response_to_criticism = req.body.response_to_criticism;
        var reaction_to_mistakes = req.body.reaction_to_mistakes;
        var rating = req.body.rating;
        var notes = req.body.notes;
      
      
        var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });
      
        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, wmresults) {
          if (err) {
            throw err;
          } else {
      
            console.log(wmresults.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.wide_midfielder_reports (player_id,scouted_by,control,receiving_under_pressure,short_passing,switching_play,right_foot,left_foot,attacking_one_v_one,attacking_ariel_ability,dribbling,shooting,crossing,defending_one_v_one,defending_ariel_ability,supporting_full_back,tackling,pressing,positional_awareness,recovery_runs,tracking_runners,agility,coming_in_off_the_line,finding_space_out_wide,link_up_with_full_back,willingness_to_get_forward,pace,speed_when_dribbling,strength,work_rate,bravery,leadership,teamwork,communication,response_to_criticism,reaction_to_mistakes,rating,notes)  VALUES ?";
            var values = [[wmresults[0].player_id, scouted_by, control, receiving_under_pressure, short_passing, switching_play, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, dribbling, shooting, crossing, defending_one_v_one, defending_ariel_ability, supporting_full_back, tackling, pressing, positional_awareness, recovery_runs, tracking_runners, agility, coming_in_off_the_line, finding_space_out_wide, link_up_with_full_back, willingness_to_get_forward, pace,
              speed_when_dribbling, strength, work_rate, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes]];
      
            connect.connection.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
      
          };
      
      
        })
      }
      );

}