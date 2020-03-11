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
      
        //// Test for null input to database
        
        if (control == ''){
          var control = null
          }
          
        if (receiving_under_pressure == ''){
          var receiving_under_pressure = null
          }

          
        if (short_passing == ''){
          var short_passing = null
          }

        if (switching_play == ''){
            var switching_play = null
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
      
        if (dribbling == ''){
          var dribbling = null
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

          
        if (supporting_full_back == ''){
          var supporting_full_back = null
          }

          
        if (tackling == ''){
          var tackling = null
          }

          
        if (pressing == ''){
          var pressing = null
          }

          
        if (positional_awareness == ''){
          var positional_awareness = null
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
        
        if (coming_in_off_the_line == ''){
          var coming_in_off_the_line = null
          }

          
        if (finding_space_out_wide == ''){
          var finding_space_out_wide = null
          }

          
        if (link_up_with_full_back == ''){
          var link_up_with_full_back = null
          }

          
        if (willingness_to_get_forward == ''){
          var willingness_to_get_forward = null
          }

          
        if (pace == ''){
          var pace = null
          }

          
        if (speed_when_dribbling == ''){
          var speed_when_dribbling = null
          }
  
          
        if (strength == ''){
          var strength = null
          }


        if (work_rate == ''){
          var work_rate = null
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
          if (!(isNaN(attributes[i]))){
            if ((attributes[i] - threshold) > average){
              outstandinglabel[i] = attributenames[i];
              outstandingscore[i] = attributes[i];
              summary += ", "+outstandinglabel[i] + " ("+outstandingscore[i]+")"
            };
          };    
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

                  worksheet.cell(4, 3, 8, 4, true).string("Wide Midfield");
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
                  worksheet.cell(13, 1, 13, 2, true).string('Control');
                  worksheet.cell(13, 3).string(control);
                  worksheet.cell(14, 1, 14, 2, true).string('Recieving Under Pressure');
                  worksheet.cell(14, 3).string(receiving_under_pressure);
                  worksheet.cell(15, 1, 15, 2, true).string('Short Passing');
                  worksheet.cell(15, 3).string(short_passing);
                  worksheet.cell(16, 1, 16, 2, true).string('Switching Play');
                  worksheet.cell(16, 3).string(switching_play);
                  worksheet.cell(17, 1, 17, 2, true).string('Right Foot');
                  worksheet.cell(17, 3).string(right_foot);
                  worksheet.cell(18, 1, 18, 2, true).string('Left Foot');
                  worksheet.cell(18, 3).string(left_foot);
                  
                  worksheet.cell(12, 4, 12, 6, true).string('Attacking');
                  worksheet.cell(13, 4, 13, 5, true).string('1v1');
                  worksheet.cell(13, 6).string(attacking_one_v_one);
                  worksheet.cell(14, 4, 14, 5, true).string('Aerial Ability');
                  worksheet.cell(14, 6).string(attacking_ariel_ability);
                  worksheet.cell(15, 4, 15, 5, true).string('Dribbling');
                  worksheet.cell(15, 6).string(dribbling);
                  worksheet.cell(16, 4, 16, 5, true).string('Shooting');
                  worksheet.cell(16, 6).string(shooting);
                  worksheet.cell(17, 4, 17, 5, true).string('Crossing');
                  worksheet.cell(17, 6).string(crossing);

                  worksheet.cell(12, 7, 12, 9, true).string('Defending');
                  worksheet.cell(13, 7, 13, 8, true).string('1v1');
                  worksheet.cell(13, 9).string(defending_one_v_one);
                  worksheet.cell(14, 7, 14, 8, true).string('Aerial Ability');
                  worksheet.cell(14, 9).string(defending_ariel_ability);
                  worksheet.cell(15, 7, 15, 8, true).string('Supporting Full Back');
                  worksheet.cell(15, 9).string(supporting_full_back);
                  worksheet.cell(16, 7, 16, 8, true).string('Tackling');
                  worksheet.cell(16, 9).string(tackling);
                  worksheet.cell(17, 7, 17, 8, true).string('Pressing');
                  worksheet.cell(17, 9).string(pressing);
                  worksheet.cell(18, 7, 18, 8, true).string('Positional Awareness');
                  worksheet.cell(18, 9).string(positional_awareness);
                  worksheet.cell(19, 7, 19, 8, true).string('Recovery Runs');
                  worksheet.cell(19, 9).string(recovery_runs);
                  worksheet.cell(20, 7, 20, 8, true).string('Tracking Runners');
                  worksheet.cell(20, 9).string(tracking_runners);

                  worksheet.cell(12, 10, 12, 12, true).string('Tactical');
                  worksheet.cell(13, 10, 13, 11, true).string('Agility');
                  worksheet.cell(13, 12).string(agility);
                  worksheet.cell(14, 10, 14, 11, true).string('Coming In Off The Line');
                  worksheet.cell(14, 12).string(coming_in_off_the_line);
                  worksheet.cell(15, 10, 15, 11, true).string('Finding Space Out Wide');
                  worksheet.cell(15, 12).string(finding_space_out_wide);
                  worksheet.cell(16, 10, 16, 11, true).string('Link Up With Full Back');
                  worksheet.cell(16, 12).string(link_up_with_full_back);
                  worksheet.cell(17, 10, 17, 11, true).string('Willingness To Get Forward');
                  worksheet.cell(17, 12).string(willingness_to_get_forward);

                  worksheet.cell(12, 13, 12, 15, true).string('Physical');
                  worksheet.cell(13, 13, 13, 14, true).string('Pace');
                  worksheet.cell(13, 15).string(pace);
                  worksheet.cell(14, 13, 14, 14, true).string('Speed When Dribbling');
                  worksheet.cell(14, 15).string(speed_when_dribbling);
                  worksheet.cell(15, 13, 15, 14, true).string('Agility');
                  worksheet.cell(15, 15).string(agility);
                  worksheet.cell(16, 13, 16, 14, true).string('Strength');
                  worksheet.cell(16, 15).string(strength);
                  worksheet.cell(17, 13, 17, 14, true).string('Work Rate');
                  worksheet.cell(17, 15).string(work_rate);
                  
                  worksheet.cell(12, 16, 12, 18, true).string('Psychological');
                  worksheet.cell(13, 16, 13, 17, true).string('Bravery');
                  worksheet.cell(13, 18).string(bravery);
                  worksheet.cell(14, 16, 14, 17, true).string('Leadership');
                  worksheet.cell(14, 18).string(leadership);
                  worksheet.cell(15, 16, 15, 17, true).string('Team Work');
                  worksheet.cell(15, 18).string(teamwork);
                  worksheet.cell(16, 16, 16, 17, true).string('Communication');
                  worksheet.cell(16, 18).string(communication);
                  worksheet.cell(16, 16, 16, 17, true).string('Response To Criticism');
                  worksheet.cell(16, 18).string(response_to_criticism);
                  worksheet.cell(17, 16, 17, 17, true).string('Reaction To Mistakes');
                  worksheet.cell(17, 18).string(reaction_to_mistakes);

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