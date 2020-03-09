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
        //Auto Generated Summary
        var summary = "";
        var average = 0.0;
        var points =0;
        var threshold=1;
      
      
        var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });



        // // create and insert summary for the player report
        // // 
        var attributes = [control, receiving_under_pressure, short_passing, switching_play, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, dribbling, shooting, crossing, defending_one_v_one, defending_ariel_ability, supporting_full_back, tackling, pressing, positional_awareness, recovery_runs, tracking_runners, agility, coming_in_off_the_line, finding_space_out_wide, link_up_with_full_back, willingness_to_get_forward, pace,
          speed_when_dribbling, strength, work_rate, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes]; 
        var attributenames = ['control', 'receiving under pressure', 'short passing', 'switching play', 'right foot', 'left foot', 'attacking one v one', 'attacking ariel ability', 'dribbling', 'shooting', 'crossing', 'defending one v one', 'defending ariel ability', 'supporting full back', 'tackling', 'pressing', 'positional awareness', 'recovery runs', 'tracking runners', 'agility', 'coming in off the line', 'finding space out wide', 'link up with full back', 'willingness to get forward', 'pace',
          'speed when dribbling', 'strength', 'work rate', 'bravery', 'leadership', 'teamwork', 'communication', 'response to criticism', 'reaction to mistakes']; 
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
        







      
        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, wmresults) {
          if (err) {
            throw err;
          } else {
      
            console.log(wmresults.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.wide_midfielder_reports (player_id,scouted_by,control,receiving_under_pressure,short_passing,switching_play,right_foot,left_foot,attacking_one_v_one,attacking_ariel_ability,dribbling,shooting,crossing,defending_one_v_one,defending_ariel_ability,supporting_full_back,tackling,pressing,positional_awareness,recovery_runs,tracking_runners,agility,coming_in_off_the_line,finding_space_out_wide,link_up_with_full_back,willingness_to_get_forward,pace,speed_when_dribbling,strength,work_rate,bravery,leadership,teamwork,communication,response_to_criticism,reaction_to_mistakes,rating,notes,summary)  VALUES ?";
            var values = [[wmresults[0].player_id, scouted_by, control, receiving_under_pressure, short_passing, switching_play, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, dribbling, shooting, crossing, defending_one_v_one, defending_ariel_ability, supporting_full_back, tackling, pressing, positional_awareness, recovery_runs, tracking_runners, agility, coming_in_off_the_line, finding_space_out_wide, link_up_with_full_back, willingness_to_get_forward, pace,
              speed_when_dribbling, strength, work_rate, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes, summary]];
      
            connect.connection.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
      
          };
      
      
        })


        //Email scout report function
        require('../../email/email_app')(app);

      }
      );

}