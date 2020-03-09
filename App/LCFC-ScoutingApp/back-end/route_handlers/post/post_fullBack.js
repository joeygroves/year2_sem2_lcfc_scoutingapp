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

    app.post('/api/fullback', (req, res) => {

        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var club_name = req.body.club_name;
        var height = req.body.height;
        var age = req.body.age
        var date_played = req.body.date_played;
        var club_played = req.body.club_played;
        var ht_score = req.body.ht_score;
        var ft_score = req.body.ft_score;
        var position = 'Full Back'
        var shirt_number = req.body.shirt_number;
      
        var scouted_by = req.session.username
      
        //In Possession
        var receiving_under_pressure = req.body.receiving_under_pressure;
        var short_passing = req.body.short_passing;
        var long_passing = req.body.long_passing;
        var control = req.body.control;
        var right_foot = req.body.right_foot;
        var left_foot = req.body.left_foot;
      
        //Attacking
        var attacking_one_v_one = req.body.attacking_one_v_one;
        var attacking_ariel_ability = req.body.attacking_ariel_ability;
        var crossing = req.body.crossing;
      
        //Defending
        var defending_one_v_one = req.body.defending_one_v_one;
        var defending_ariel_ability = req.body.defending_ariel_ability;
        var tackling = req.body.tackling;
        var defending_far_post = req.body.defending_far_post;
        var stopping_the_cross = req.body.stopping_the_cross;
        var pressing = req.body.pressing;
        var recovery_runs = req.body.recovery_runs;
        var tracking_runners = req.body.tracking_runners;
      
        //Tactical
        var agility = req.body.agility;
        var angles_to_recieve = req.body.angles_to_recieve;
        var link_up_with_winger = req.body.link_up_with_winger;
        var covering_across = req.body.covering_across;
        var willlingness_to_get_forward = req.body.willlingness_to_get_forward;
      
        //Physical
        var pace = req.body.pace;
        var mobility = req.body.mobility;
        var work_rate = req.body.work_rate;
        var strength = req.body.strength;
        var jump = req.body.jump;
      
        //Psychological
        var bravery = req.body.bravery;
        var leadership = req.body.leadership;
        var team_work = req.body.team_work;
        var communicaton = req.body.communicaton;
        var reponse_to_criticism = req.body.reponse_to_criticism;
        var reaction_to_mistake = req.body.reaction_to_mistake;
      
        //Rating
        var rating = req.body.rating;
      
        //Additional Comments
        var notes = req.body.notes;

        //Auto Generated Summary
        var summary = "";
        var average = 0.0;
        var points =0;
        var threshold=1;
      
        //Player Information
        var playerID;
      
      
        var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });
      

        // // create and insert summary for the player report
        // // 
        var attributes = [receiving_under_pressure,
          short_passing, long_passing, control, right_foot, left_foot,
          attacking_one_v_one, attacking_ariel_ability, crossing, defending_one_v_one,
          defending_ariel_ability, tackling, defending_far_post, stopping_the_cross,
          pressing, recovery_runs, tracking_runners,
          agility, angles_to_recieve, link_up_with_winger,
          covering_across, willlingness_to_get_forward,
          pace, mobility, work_rate, strength, jump, bravery,
          leadership, team_work, communicaton, reponse_to_criticism,
          reaction_to_mistake]; 
        var attributenames = ['receiving under pressure',
          'short passing', 'long passing', 'control', 'right foot', 'left foot',
          'attacking one v one', 'attacking ariel ability', 'crossing', 'defending one v one',
          'defending ariel ability', 'tackling', 'defending far post', 'stopping the cross',
          'pressing', 'recovery runs', 'tracking runners',
          'agility', 'angles to recieve', 'link up with winger',
          'covering across', 'willlingness to get forward',
          'pace', 'mobility', 'work rate', 'strength', 'jump', 'bravery',
          'leadership', 'team work', 'communicaton', 'reponse to criticism',
          'reaction to mistake']; 
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
        






        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ? AND shirt_number = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position, shirt_number], function (err, results) {
          if (err) {
            throw err;
          } else {
      
            console.log(results.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.full_back_reports (player_id, scouted_by, receiving_under_pressure, short_passing, long_passing, control, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, crossing, defending_one_v_one, defending_ariel_ability, tackling, defending_far_post, stopping_the_cross, pressing, recovery_runs, tracking_runners, agility, angles_to_receive, link_up_with_winger, covering_across, willlingness_to_get_forward, pace, mobility, work_rate, strength, jump, bravery,leadership, team_work, communicaton, response_to_criticism, reaction_to_mistake,rating, notes, summary) VALUES ?";
      
            var values = [[results[0].player_id, scouted_by, receiving_under_pressure,
              short_passing, long_passing, control, right_foot, left_foot,
              attacking_one_v_one, attacking_ariel_ability, crossing, defending_one_v_one,
              defending_ariel_ability, tackling, defending_far_post, stopping_the_cross,
              pressing, recovery_runs, tracking_runners,
              agility, angles_to_recieve, link_up_with_winger,
              covering_across, willlingness_to_get_forward,
              pace, mobility, work_rate, strength, jump, bravery,
              leadership, team_work, communicaton, reponse_to_criticism,
              reaction_to_mistake,
              rating, notes, summary]];
      
            connect.connection.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
      
          };
      
      
        })
      }
      );

}