const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = function(app) {


  var connection = mysql.createConnection({

    host: 'localhost',
  
    //Enter your mySQL username here
    user: 'root',
  
    //Enter your mySQL password here
    password: 'password69%',
  
    database: 'LCFC_Scouting'
  
  });
  
  
  app.use(session({
  
    secret: 'secret',
  
    resave: true,
  
    saveUninitialized: true
  
  }));


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
  var position = 'fullBack'
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

  //Player Information
  var playerID;


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ? AND shirt_number = ?";
  connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position, shirt_number], function (err, results) {
    if (err) {
      throw err;
    } else {
      
      console.log(results.length);
      console.log();

      var sql = "INSERT INTO lcfc_scouting.full_back_reports (player_id, scouted_by, receiving_under_pressure, short_passing, long_passing, control, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, crossing, defending_one_v_one, defending_ariel_ability, tackling, defending_far_post, stopping_the_cross, pressing, recovery_runs, tracking_runners, agility, angles_to_receive, link_up_with_winger, covering_across, willlingness_to_get_forward, pace, mobility, work_rate, strength, jump, bravery,leadership, team_work, communicaton, response_to_criticism, reaction_to_mistake,rating, notes) VALUES ?";

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
                      rating, notes]];

      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    };


})
  }
);

}