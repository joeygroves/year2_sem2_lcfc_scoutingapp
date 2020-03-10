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

    app.post("/api/centreMid", (req, res) => {
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var club_name = req.body.club_name;
        var height = req.body.height;
        var age = req.body.age;
        var date_played = req.body.date_played;
        var club_played = req.body.club_played;
        var ht_score = req.body.ht_score;
        var ft_score = req.body.ft_score;
        var position = "Centre Midfielder";
      
        var scouted_by = req.session.username;
        var control_under_pressure = req.body.control_under_pressure;
        var bravery_in_posession = req.body.bravery_in_posession;
        var short_passing = req.body.short_passing;
        var switching_play = req.body.switching_play;
        var running_with_the_ball = req.body.running_with_the_ball;
        var right_foot = req.body.right_foot;
        var left_foot = req.body.left_foot;
        var attacking_one_v_one = req.body.attacking_one_v_one;
        var attacking_ariel_ability = req.body.attacking_ariel_ability;
        var shooting = req.body.shooting;
        var crossing = req.body.crossing;
        var defending_one_v_one = req.body.defending_one_v_one;
        var defending_ariel_ability = req.body.defending_ariel_ability;
        var tackling = req.body.tackling;
        var closing_down = req.body.closing_down;
        var recovery_runs = req.body.recovery_runs;
        var marking = req.body.marking;
        var agility = req.body.agility;
        var finding_space = req.body.finding_space;
        var vision = req.body.vision;
        var creativity = req.body.creativity;
        var speed = req.body.speed;
        var movement_skills = req.body.movement_skills;
        var work_rate = req.body.work_rate;
        var strength = req.body.strength;
        var communication = req.body.communication;
        var concentration = req.body.concentration;
        var commitment = req.body.commitment;
        var emotional_control = req.body.emotional_control;
        var confidence = req.body.confidence;
        var rating = req.body.rating;
        var notes = req.body.notes;
        var shirt_number = req.body.shirt_number;
        var summary = "";
        var average = 0.0;
        var points =0;
        var threshold=1;
        var playerID;



        ////null input to database if no value entered by scout
        
        if (control_under_pressure == ''){
          var bravery_in_posession = null
          }
          
        if (short_passing == ''){
          var short_passing = null
          }

          
        if (switching_play == ''){
          var switching_play = null
          }

        if (running_with_the_ball == ''){
            var running_with_the_ball = null
        }
    

        if (right_foot == ''){
            var right_foot = null
          }
    
        
        if (left_foot == ''){
            var left_foot = null
        }
    
        if (attacking_one_v_one == ''){
          var attacking_one_v_one = null
          }

        if (attacking_ariel_ability == ''){
            var attacking_ariel_ability = null
          }

        if (shooting == ''){
        var shooting = null
        }
      
        if (crossing == ''){
          var crossing = null
          }

        if (defending_one_v_one == ''){
        var defending_one_v_one = null
        }

        
        if (defending_ariel_ability == ''){
          var defending_ariel_ability = null
          }

          
        if (tackling == ''){
          var tackling = null
          }

          
        if (closing_down == ''){
          var closing_down = null
          }

          
        if (recovery_runs == ''){
          var recovery_runs = null
          }

          
        if (marking == ''){
          var marking = null
          }

          
        if (agility == ''){
          var agility = null
          }

          
        if (finding_space == ''){
          var finding_space = null
          }

          
        if (vision == ''){
          var vision = null
          }

          
        if (creativity == ''){
          var creativity = null
          }
  
  
0
        if (speed == ''){
        var speed = null
        }
        
        if (movement_skills == ''){
          var movement_skills = null
          }

          
        if (work_rate == ''){
          var work_rate = null
          }

          
        if (work_rate == ''){
          var work_rate = null
          }

          
        if (strength == ''){
          var strength = null
          }

          
        if (communication == ''){
          var communication = null
          }

          
        if (concentration == ''){
          var concentration = null
          }
  
          
        if (commitment == ''){
          var commitment = null
          }
  
          
          
        if (emotional_control == ''){
          var emotional_control = null
          }

        
          
        if (confidence == ''){
            var confidence = null
          }

            
        ////
      












      
        var PlayerSQL =
          "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [
          [first_name, last_name, club_name, height, age, position, shirt_number]
        ];
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });
      


        // // create and insert summary for the player report
        // // 
        var attributes = [control_under_pressure, bravery_in_posession, short_passing, switching_play, running_with_the_ball, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, shooting, crossing, defending_one_v_one,
          defending_ariel_ability, tackling, closing_down, recovery_runs, marking, agility, finding_space, vision, creativity, speed, movement_skills, work_rate,
          strength, communication, concentration, commitment, emotional_control, confidence]; 
        var attributenames = ['control under pressure', 'bravery in posession', 'short passing', 'switching play', 'running with the ball', 'right foot', 'left foot', 'attacking one v one', 'attacking ariel ability', 'shooting', 'crossing', 'defending one v one',
          'defending ariel ability', 'tackling', 'closing down', 'recovery runs', 'marking', 'agility', 'finding space', 'vision', 'creativity', 'speed', 'movement skills', 'work rate',
          'strength', 'communication', 'concentration', 'commitment', 'emotional control', 'confidence']; 
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
        









        var PlayerIDSQL =
          "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST( ? AS DECIMAL) AND age = ? AND position = ?";
        connect.connection.query(
          PlayerIDSQL,
          [first_name, last_name, club_name, height, age, position],
          function (err, results) {
            if (err) {
              throw err;
            } else {
              console.log(results.length);
              console.log();
      
              var sql =
                "INSERT INTO lcfc_scouting.centre_midfielder_reports(player_id, scouted_by, control_under_pressure, bravery_in_posession, short_passing, switching_play, running_with_the_ball, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, shooting, crossing, defending_one_v_one, defending_ariel_ability, tackling, closing_down, recovery_runs, marking, agility, finding_space, vision, creativity, speed, movement_skills, work_rate, strength, communication, concentration, commitment, emotional_control, confidence, rating, notes, summary) VALUES ?";
              var values = [
                [
                  results[0].player_id, scouted_by, control_under_pressure, bravery_in_posession, short_passing, switching_play, running_with_the_ball, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, shooting, crossing, defending_one_v_one,
                  defending_ariel_ability, tackling, closing_down, recovery_runs, marking, agility, finding_space, vision, creativity, speed, movement_skills, work_rate,
                  strength, communication, concentration, commitment, emotional_control, confidence, rating, notes, summary
                ]
              ];
      
              connect.connection.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows);
              });
            }
          }
        );
      });

}