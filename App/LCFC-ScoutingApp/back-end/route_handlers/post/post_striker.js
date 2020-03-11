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

        ////null input to database if no value entered by scout
        
        if (hold_up_play == ''){
          var hold_up_play = null
          }
          
        if (receiving_under_pressure == ''){
          var receiving_under_pressure = null
          }

          
        if (link_up_play == ''){
          var link_up_play = null
          }

        if (right_foot == ''){
            var right_foot = null
        }
    

        if (left_foot == ''){
            var left_foot = null
          }
    
        
        if (one_v_one == ''){
            var one_v_one = null
        }
    
        if (aerial_ability == ''){
          var aerial_ability = null
          }

        if (finishing == ''){
            var finishing = null
          }

        if (right_foot_shooting == ''){
        var right_foot_shooting = null
        }
      
        if (left_foot_shooting == ''){
          var left_foot_shooting = null
          }

        if (crossing == ''){
        var crossing = null
        }

        
        if (one_v_two == ''){
          var one_v_two = null
          }

          
        if (tackling == ''){
          var tackling = null
          }

          
        if (pressing == ''){
          var pressing = null
          }

          
        if (recovering_into_shape == ''){
          var recovering_into_shape = null
          }

          
        if (agility == ''){
          var agility = null
          }

          
        if (dropping_into_space == ''){
          var dropping_into_space = null
          }

          
        if (runs_off_the_shoulder == ''){
          var runs_off_the_shoulder = null
          }

          
        if (running_the_channels == ''){
          var running_the_channels = null
          }

          
        if (movement_off_the_ball == ''){
          var movement_off_the_ball = null
          }
  
  
0
        if (pace == ''){
        var pace = null
        }
        
        if (mobility == ''){
          var mobility = null
          }

          
        if (strength == ''){
          var strength = null
          }

          
        if (work_rate == ''){
          var work_rate = null
          }

          
        if (jump == ''){
          var jump = null
          }

          
        if (bravery == ''){
          var bravery = null
          }

          
        if (leadership == ''){
          var leadership = null
          }
  
          
        if (teamwork == ''){
          var teamwork = null
          }
  
          
          
        if (communication == ''){
          var communication = null
          }

        
          
        if (response_to_criticism == ''){
            var response_to_criticism = null
          }

            
          
        if (reaction_to_mistakes == ''){
          var reaction_to_mistakes = null
          }

        ////

      
      
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

                worksheet.cell(4, 3, 8, 4, true).string("Striker");
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

                
                worksheet.cell(12, 1, 12, 3, true).string('In Possession');
                worksheet.cell(13, 1, 13, 2, true).string('Hold Up Play');
                worksheet.cell(13, 3).string(hold_up_play);
                worksheet.cell(14, 1, 14, 2, true).string('Receiving Under Pressure');
                worksheet.cell(14, 3).string(receiving_under_pressure);
                worksheet.cell(15, 1, 15, 2, true).string('Link Up Play');
                worksheet.cell(15, 3).string(link_up_play);
                worksheet.cell(16, 1, 16, 2, true).string('Right Foot');
                worksheet.cell(16, 3).string(right_foot);
                worksheet.cell(17, 1, 17, 2, true).string('Left Foot');
                worksheet.cell(17, 3).string(left_foot);
               
                
                worksheet.cell(12, 4, 12, 6, true).string('Attacking');
                worksheet.cell(13, 4, 13, 5, true).string('1v1');
                worksheet.cell(13, 6).string(one_v_one);
                worksheet.cell(14, 4, 14, 5, true).string('Aerial Ability');
                worksheet.cell(14, 6).string(aerial_ability);
                worksheet.cell(15, 4, 15, 5, true).string('Finishing');
                worksheet.cell(15, 6).string(finishing);
                worksheet.cell(16, 4, 16, 5, true).string('Right Foot Shooting');
                worksheet.cell(16, 6).string(right_foot_shooting);
                worksheet.cell(17, 4, 17, 5, true).string('Left Foot Shooting');
                worksheet.cell(17, 6).string(left_foot_shooting);
                worksheet.cell(18, 4, 18, 5, true).string('Crossing');
                worksheet.cell(18, 6).string(crossing);

                worksheet.cell(12, 7, 12, 9, true).string('Defending');
                worksheet.cell(13, 7, 13, 8, true).string('1v2');
                worksheet.cell(13, 9).string(one_v_two);
                worksheet.cell(14, 7, 14, 8, true).string('Tackling');
                worksheet.cell(14, 9).string(tackling);
                worksheet.cell(15, 7, 15, 8, true).string('Pressing');
                worksheet.cell(15, 9).string(pressing);
                worksheet.cell(16, 7, 16, 8, true).string('Recovering Into Shape');
                worksheet.cell(16, 9).string(recovering_into_shape);
                
                worksheet.cell(12, 10, 12, 12, true).string('Tactical');
                worksheet.cell(13, 10, 13, 11, true).string('Agility');
                worksheet.cell(13, 12).string(agility);
                worksheet.cell(14, 10, 14, 11, true).string('Dropping Into Space');
                worksheet.cell(14, 12).string(dropping_into_space);
                worksheet.cell(15, 10, 15, 11, true).string('Runs Off The Shoulder');
                worksheet.cell(15, 12).string(runs_off_the_shoulder);
                worksheet.cell(16, 10, 16, 11, true).string('Running The Channels');
                worksheet.cell(16, 12).string(running_the_channels);
                worksheet.cell(17, 10, 17, 11, true).string('Movement Off The Ball');
                worksheet.cell(17, 12).string(movement_off_the_ball);

                worksheet.cell(12, 13, 12, 15, true).string('Physical');
                worksheet.cell(13, 13, 13, 14, true).string('Pace');
                worksheet.cell(13, 15).string(pace);
                worksheet.cell(14, 13, 14, 14, true).string('Mobility');
                worksheet.cell(14, 15).string(mobility);
                worksheet.cell(15, 13, 15, 14, true).string('Stength/Planning');
                worksheet.cell(15, 15).string(strength);
                worksheet.cell(16, 13, 16, 14, true).string('Work Rate');
                worksheet.cell(16, 15).string(work_rate);
                worksheet.cell(17, 13, 17, 14, true).string('Jump/Spring');
                worksheet.cell(17, 15).string(jump);
                
                worksheet.cell(12, 16, 12, 18, true).string('Psychological');
                worksheet.cell(13, 16, 13, 17, true).string('Bravery');
                worksheet.cell(13, 18).string(bravery);
                worksheet.cell(14, 16, 14, 17, true).string('Leadership');
                worksheet.cell(14, 18).string(leadership);
                worksheet.cell(15, 16, 15, 17, true).string('Team Work');
                worksheet.cell(15, 18).string(teamwork);
                worksheet.cell(16, 16, 16, 17, true).string('Communication');
                worksheet.cell(16, 18).string(communication);
                worksheet.cell(17, 16, 17, 17, true).string('Response To Criticsm');
                worksheet.cell(17, 18).string(response_to_criticism);
                worksheet.cell(18, 16, 18, 17, true).string('Reaction To Mistakes');
                worksheet.cell(18, 18).string(reaction_to_mistakes);

                worksheet.cell(22, 1, 22, 18, true).string('Notes');
                worksheet.cell(23, 1, 25, 18, true).string(notes);
                
                worksheet.cell(26, 1, 26, 18, true).string('Summary');
                worksheet.cell(27, 1, 29, 18, true).string(summary);


                worksheet.cell(30, 4, 30, 7, true).string('Player Rating');
                worksheet.cell(30, 8).string(rating);

        
                workbook.write('/Users/jamie/Documents/Year2/Software Engineering/LCFC Scouting App Development/myBranch/scrum-13/App/LCFC-ScoutingApp/back-end/email/Test.xlsx');
            
              }
            });
          }
        }
      );

      setTimeout(() => {  require('../../email/email_app')(app) }, 10000);

      
      
    

}

)
}