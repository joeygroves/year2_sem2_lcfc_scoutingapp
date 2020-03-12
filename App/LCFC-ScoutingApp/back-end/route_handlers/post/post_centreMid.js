const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
//const delay = require('delay');
var fs  = require('fs');

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
          var control_under_pressure = null
          }
          
        if (bravery_in_posession == ''){
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
          if (!(isNaN(attributes[i])))
          {
            points = points + Math.round(attributes[i]);
          }
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
              
                if (err) { 
                  throw err;
                } else {

                  var excel = require('excel4node');

                  // Create a new instance of a Workbook class
                  var workbook = new excel.Workbook();
          
                  // Add Worksheets to the workbook
                  var worksheet = workbook.addWorksheet('Sheet 1');
                  
                  
                  worksheet.cell(1,7).string('Fixture');
                  worksheet.cell(1, 8, 1, 12, true).string(club_name+ " vs " + club_played);

                  worksheet.cell(4, 3, 8, 4, true).string("Centre Midfield");
                  worksheet.cell(4, 5, 4, 6, true).string('Name');
                  worksheet.cell(4, 7, 4, 9, true).string(first_name + " " + last_name);
                  worksheet.cell(5, 5, 5, 6, true).string('Height');
                  worksheet.cell(5, 7, 5, 9, true).string(height);
                  worksheet.cell(6, 5, 6, 6, true).string('Position');
                  worksheet.cell(6, 7, 6, 9, true).string(position);
                  worksheet.cell(7, 5, 7, 6, true).string('Playing Against');
                  worksheet.cell(7, 7, 7, 9, true).string(club_played);
                  worksheet.cell(8, 5, 8, 6, true).string('Date');
                  worksheet.cell(8, 7, 8, 9, true).string(date_played);

                  worksheet.cell(4, 10, 4, 11, true).string('Age');
                  worksheet.cell(4, 12, 4, 13, true).string(age);
                  worksheet.cell(5, 10, 5, 11, true).string('Club');
                  worksheet.cell(5, 12, 5, 13, true).string(club_name);
                  worksheet.cell(6, 10, 6, 11, true).string('H/T');
                  worksheet.cell(6, 12, 6, 13, true).string(ht_score);
                  worksheet.cell(7, 10, 7, 11, true).string('F/T');
                  worksheet.cell(7, 12, 7, 13, true).string(ft_score);

                  worksheet.cell(8, 14, 8, 15, true).string('Scout');
                  worksheet.cell(8, 16, 8, 17, true).string(scouted_by);

                  
                  worksheet.cell(12, 1, 12, 3, true).string('General');
                  worksheet.cell(13, 1, 13, 2, true).string('Control Under Pressure');
                  worksheet.cell(13, 3).string(control_under_pressure);
                  worksheet.cell(14, 1, 14, 2, true).string('Bravery In Possession');
                  worksheet.cell(14, 3).string(bravery_in_posession);
                  worksheet.cell(15, 1, 15, 2, true).string('Short Passing');
                  worksheet.cell(15, 3).string(short_passing);
                  worksheet.cell(16, 1, 16, 2, true).string('Switching Play');
                  worksheet.cell(16, 3).string(switching_play);
                  worksheet.cell(17, 1, 17, 2, true).string('Running With The Ball');
                  worksheet.cell(17, 3).string(running_with_the_ball);
                  worksheet.cell(18, 1, 18, 2, true).string('Right Foot');
                  worksheet.cell(18, 3).string(right_foot);
                  worksheet.cell(19, 1, 19, 2, true).string('Left Foot');
                  worksheet.cell(19, 3).string(left_foot);
                  
                  worksheet.cell(12, 4, 12, 6, true).string('Attacking');
                  worksheet.cell(13, 4, 13, 5, true).string('1v1');
                  worksheet.cell(13, 6).string(attacking_one_v_one);
                  worksheet.cell(14, 4, 14, 5, true).string('Aerial Ability');
                  worksheet.cell(14, 6).string(attacking_ariel_ability);
                  worksheet.cell(15, 4, 15, 5, true).string('Finishing');
                  worksheet.cell(15, 6).string(shooting);
                  worksheet.cell(16, 4, 16, 5, true).string('Crossing');
                  worksheet.cell(16, 6).string(crossing);

                  worksheet.cell(12, 7, 12, 9, true).string('Defending');
                  worksheet.cell(13, 7, 13, 8, true).string('1v1');
                  worksheet.cell(13, 9).string(defending_one_v_one);
                  worksheet.cell(14, 7, 14, 8, true).string('Aerial Ability');
                  worksheet.cell(14, 9).string(defending_ariel_ability);
                  worksheet.cell(15, 7, 15, 8, true).string('Tackling');
                  worksheet.cell(15, 9).string(tackling);
                  worksheet.cell(16, 7, 16, 8, true).string('Closing Down');
                  worksheet.cell(16, 9).string(closing_down);
                  worksheet.cell(17, 7, 17, 8, true).string('Recovery Runs');
                  worksheet.cell(17, 9).string(recovery_runs);
                  worksheet.cell(18, 7, 18, 8, true).string('Marking/Awareness');
                  worksheet.cell(18, 9).string(marking);

                  worksheet.cell(12, 10, 12, 12, true).string('Tactical');
                  worksheet.cell(13, 10, 13, 11, true).string('Agility');
                  worksheet.cell(13, 12).string(agility);
                  worksheet.cell(14, 10, 14, 11, true).string('Finding Space');
                  worksheet.cell(14, 12).string(finding_space);
                  worksheet.cell(15, 10, 15, 11, true).string('Vision To See A Pass');
                  worksheet.cell(15, 12).string(vision);
                  worksheet.cell(16, 10, 16, 11, true).string('Creativity');
                  worksheet.cell(16, 12).string(creativity);

                  worksheet.cell(12, 13, 12, 15, true).string('Physical');
                  worksheet.cell(13, 13, 13, 14, true).string('Speed');
                  worksheet.cell(13, 15).string(speed);
                  worksheet.cell(14, 13, 14, 14, true).string('Movement Skills');
                  worksheet.cell(14, 15).string(movement_skills);
                  worksheet.cell(15, 13, 15, 14, true).string('Work Rate');
                  worksheet.cell(15, 15).string(work_rate);
                  worksheet.cell(16, 13, 16, 14, true).string('Strength');
                  worksheet.cell(16, 15).string(strength);
                  
                  worksheet.cell(12, 16, 12, 18, true).string('Psychological');
                  worksheet.cell(13, 16, 13, 17, true).string('Communication');
                  worksheet.cell(13, 18).string(communication);
                  worksheet.cell(14, 16, 14, 17, true).string('Concentration');
                  worksheet.cell(14, 18).string(concentration);
                  worksheet.cell(15, 16, 15, 17, true).string('Commitment');
                  worksheet.cell(15, 18).string(commitment);
                  worksheet.cell(16, 16, 16, 17, true).string('Emotional Control');
                  worksheet.cell(16, 18).string(emotional_control);
                  worksheet.cell(16, 16, 16, 17, true).string('Confidence');
                  worksheet.cell(16, 18).string(confidence);

                  worksheet.cell(22, 1, 22, 18, true).string('Notes');
                  worksheet.cell(23, 1, 25, 18, true).string(notes);
                  
                  worksheet.cell(26, 1, 26, 18, true).string('Summary');
                  worksheet.cell(27, 1, 29, 18, true).string(summary);


                  worksheet.cell(30, 4, 30, 7, true).string('Player Rating');
                  worksheet.cell(30, 8).string(rating);

          
                  workbook.write('Report.xlsx');
              
                }
              });
            }
          }
        );

        setTimeout(() => {  require('../../email/email_app')(app) }, 10000);

        
        
      

}

)
}