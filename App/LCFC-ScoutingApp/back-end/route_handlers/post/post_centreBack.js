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
      
            var sql = "INSERT INTO lcfc_scouting.centre_back_reports (player_id,scouted_by,receiving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_receive, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake, rating, notes, summary) VALUES ?";
            var values = [[results[0].player_id, scouted_by, recieving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_recieve, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake, rating, notes, summary]];
      
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