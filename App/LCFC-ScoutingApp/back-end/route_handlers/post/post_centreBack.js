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

    app.post('/api/centreBack', (req, res) => {

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
        var position = 'Centre Back'
      
        var scouted_by = req.session.username
        var recieving_under_pressure = req.body.recieving_under_pressure;
        var short_passing = req.body.short_passing;
        var long_passing = req.body.long_passing;
        var carrying_the_ball_forward = req.body.carrying_the_ball_forward;
        var right_foot = req.body.right_foot;
        var left_foot = req.body.left_foot;
        var threat_at_set_plays = req.body.threat_at_set_plays;
        var attacking_ariel_ability = req.body.attacking_ariel_ability;
        var one_v_one = req.body.one_v_one;
        var defending_ariel_ability = req.body.defending_ariel_ability;
        var tackling = req.body.tackling;
        var marking = req.body.marking;
        var interceptions = req.body.interceptions;
        var sensing_danger = req.body.sensing_danger;
        var defending_crosses = req.body.defending_crosses;
        var pressing = req.body.pressing;
        var recovery_runs = req.body.recovery_runs;
        var tracking_runners = req.body.tracking_runners;
        var agility = req.body.agility;
        var angles_to_recieve = req.body.angles_to_recieve;
        var distances = req.body.distances;
        var recovering_to_shape = req.body.recovering_to_shape;
        var pace_when_turning = req.body.pace_when_turning;
        var jump = req.body.jump;
        var mobility = req.body.mobility;
        var strength = req.body.strength;
        var aggression = req.body.aggression;
        var bravery = req.body.bravery;
        var leadership = req.body.leadership;
        var team_work = req.body.team_work;
        var communication = req.body.communication;
        var response_to_criticism = req.body.response_to_criticism;
        var reaction_to_mistake = req.body.reaction_to_mistake;
        var rating = req.body.rating;
        var notes = req.body.notes;
        var summary = "";
        var average = 0.0;
        var points =0;
        var threshold=1;
        var playerID;
      
        //// Test for null input to database
        
        if (recieving_under_pressure == ''){
          var recieving_under_pressure = null
          }
          
        if (short_passing == ''){
          var short_passing = null
          }

          
        if (long_passing == ''){
          var long_passing = null
          }

        if (carrying_the_ball_forward == ''){
            var carrying_the_ball_forward = null
          }
    
        
        if (right_foot == ''){
            var right_foot = null
        }
    
        if (left_foot == ''){
          var left_foot = null
          }

        if (threat_at_set_plays == ''){
            var threat_at_set_plays = null
          }

        if (attacking_ariel_ability == ''){
        var attacking_ariel_ability = null
        }
      
        if (one_v_one == ''){
          var one_v_one = null
          }

        if (defending_ariel_ability == ''){
        var defending_ariel_ability = null
        }

        
        if (tackling == ''){
          var tackling = null
          }

          
        if (marking == ''){
          var marking = null
          }

          
        if (interceptions == ''){
          var interceptions = null
          }

          
        if (sensing_danger == ''){
          var sensing_danger = null
          }

          
        if (defending_crosses == ''){
          var defending_crosses = null
          }

          
        if (pressing == ''){
          var pressing = null
          }

          
        if (recovery_runs == ''){
          var recovery_runs = null
          }

          
        if (tracking_runners == ''){
          var tracking_runners = null
          }

          
        if (agility == ''){
          var agility = null
          }
  
  
0
        if (angles_to_recieve == ''){
        var angles_to_recieve = null
        }
        
        if (distances == ''){
          var distances = null
          }

          
        if (recovering_to_shape == ''){
          var recovering_to_shape = null
          }

          
        if (pace_when_turning == ''){
          var pace_when_turning = null
          }

          
        if (jump == ''){
          var jump = null
          }

          
        if (mobility == ''){
          var mobility = null
          }

          
        if (strength == ''){
          var strength = null
          }
  
          
        if (aggression == ''){
          var aggression = null
          }


        if (bravery == ''){
          var bravery = null
          }


        if (leadership == ''){
          var leadership = null
          }


        if (team_work == ''){
          var team_work = null
         }


        if (communication == ''){
          var communication = null
         }


        if (response_to_criticism == ''){
          var response_to_criticism = null
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
        var attributes = [recieving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_recieve, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake]; 
        var attributenames = ['recieving under pressure', 'short passing', 'long passing', 'carrying the ball forward', 'right foot', 'left foot', 'threat at set plays', 'attacking ariel ability', 'one v one', 'defending ariel ability', 'tackling', 'marking', 'interceptions', 'sensing danger', 'defending crosses', 'pressing', 'recovery runs', 'tracking runners', 'agility', 'angles to recieve', 'distances', 'recovering to shape', 'pace when turning', 'jump', 'mobility', 'strength', 'aggression', 'bravery', 'leadership', 'team work', 'communication', 'response to criticism', 'reaction to mistake']; 
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
          if (!(isNaN(attributes[i]))){
            if ((attributes[i] - threshold) > average){
              outstandinglabel[i] = attributenames[i];
              outstandingscore[i] = attributes[i];
              summary += ", "+outstandinglabel[i] + " ("+outstandingscore[i]+")"
            };
          };    
        };
        summary += "."

        summary += "."

        


        var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ? AND shirt_number = ?";
        connect.connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position, shirt_number], function (err, results) {
        
          if (err) {
            throw err;
          } else {
      
            console.log(results.length);
            console.log();
      
            var sql = "INSERT INTO lcfc_scouting.centre_back_reports (player_id,scouted_by,receiving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_receive, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake, rating, notes, summary) VALUES ?";
            var values = [[results[0].player_id, scouted_by, recieving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_recieve, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake, rating, notes, summary]];
      
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

                worksheet.cell(4, 3, 8, 4, true).string("Centre Back");
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
                worksheet.cell(13, 1, 13, 2, true).string('Receiving Under Pressure');
                worksheet.cell(13, 3).string(recieving_under_pressure);
                worksheet.cell(14, 1, 14, 2, true).string('Short Passing');
                worksheet.cell(14, 3).string(short_passing);
                worksheet.cell(15, 1, 15, 2, true).string('Long Passing');
                worksheet.cell(15, 3).string(long_passing);
                worksheet.cell(16, 1, 16, 2, true).string('Carrying the Ball Forward');
                worksheet.cell(16, 3).string(carrying_the_ball_forward);
                worksheet.cell(17, 1, 17, 2, true).string('Right Foot');
                worksheet.cell(17, 3).string(right_foot);
                worksheet.cell(18, 1, 18, 2, true).string('Left Foot');
                worksheet.cell(18, 3).string(left_foot);
                
                worksheet.cell(12, 4, 12, 6, true).string('Attacking');
                worksheet.cell(13, 4, 13, 5, true).string('Threat At Set Plays');
                worksheet.cell(13, 6).string(threat_at_set_plays);
                worksheet.cell(14, 4, 14, 5, true).string('Aerial Ability');
                worksheet.cell(14, 6).string(attacking_ariel_ability);
               

                worksheet.cell(12, 7, 12, 9, true).string('Defending');
                worksheet.cell(13, 7, 13, 8, true).string('1 v 1');
                worksheet.cell(13, 9).string(one_v_one);
                worksheet.cell(14, 7, 14, 8, true).string('Aerial Ability');
                worksheet.cell(14, 9).string(defending_ariel_ability);
                worksheet.cell(15, 7, 15, 8, true).string('Tackling');
                worksheet.cell(15, 9).string(tackling);
                worksheet.cell(16, 7, 16, 8, true).string('Marking');
                worksheet.cell(16, 9).string(marking);
                worksheet.cell(17, 7, 17, 8, true).string('Reading Game');
                worksheet.cell(17, 9).string(interceptions);
                worksheet.cell(18, 7, 18, 8, true).string('Sensing Danger');
                worksheet.cell(18, 9).string(sensing_danger);
                worksheet.cell(19, 7, 19, 8, true).string('Defending Crosses');
                worksheet.cell(19, 9).string(defending_crosses);
                worksheet.cell(20, 7, 20, 8, true).string('Pressing');
                worksheet.cell(20, 9).string(pressing);
                worksheet.cell(21, 7, 21, 8, true).string('Recovery Runs');
                worksheet.cell(21, 9).string(recovery_runs);
                worksheet.cell(22, 7, 22, 8, true).string('Tracking Runners');
                worksheet.cell(22, 9).string(tracking_runners);
               

                worksheet.cell(12, 10, 12, 12, true).string('Tactical');
                worksheet.cell(13, 10, 13, 11, true).string('Agility');
                worksheet.cell(13, 12).string(agility);
                worksheet.cell(14, 10, 14, 11, true).string('Angles To Receive');
                worksheet.cell(14, 12).string(angles_to_recieve);
                worksheet.cell(15, 10, 15, 11, true).string('Distances');
                worksheet.cell(15, 12).string(distances);
                worksheet.cell(16, 10, 16, 11, true).string('Recovering To Shape');
                worksheet.cell(16, 12).string(recovering_to_shape);


                worksheet.cell(12, 13, 12, 15, true).string('Physical');
                worksheet.cell(13, 13, 13, 14, true).string('Pace When Turning');
                worksheet.cell(13, 15).string(pace_when_turning);
                worksheet.cell(14, 13, 14, 14, true).string('Jump/Spring');
                worksheet.cell(14, 15).string(jump);
                worksheet.cell(15, 13, 15, 14, true).string('Mobility');
                worksheet.cell(15, 15).string(mobility);
                worksheet.cell(16, 13, 16, 14, true).string('Strength');
                worksheet.cell(16, 15).string(strength);
                worksheet.cell(17, 13, 17, 14, true).string('Aggression');
                worksheet.cell(17, 15).string(aggression);

                worksheet.cell(12, 16, 12, 18, true).string('Psychological');
                worksheet.cell(13, 16, 13, 17, true).string('Bravery');
                worksheet.cell(13, 18).string(bravery);
                worksheet.cell(14, 16, 14, 17, true).string('Leadership');
                worksheet.cell(14, 18).string(leadership);
                worksheet.cell(15, 16, 15, 17, true).string('Team Work');
                worksheet.cell(15, 18).string(team_work);
                worksheet.cell(16, 16, 16, 17, true).string('Communication');
                worksheet.cell(16, 18).string(communication);
                worksheet.cell(16, 16, 16, 17, true).string('Response To Criticism');
                worksheet.cell(16, 18).string(response_to_criticism);
                worksheet.cell(17, 16, 17, 17, true).string('Reaction To Mistakes');
                worksheet.cell(17, 18).string(reaction_to_mistake);

                worksheet.cell(24, 1, 24, 18, true).string('Notes');
                worksheet.cell(25, 1, 27, 18, true).string(notes);
                
                worksheet.cell(28, 1, 28, 18, true).string('Summary');
                worksheet.cell(29, 1, 30, 18, true).string(summary);


                worksheet.cell(32, 4, 32, 7, true).string('Player Rating');
                worksheet.cell(32, 8).string(rating);

        
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