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
        var playerID;
      
        var PlayerSQL =
          "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
        var PlayerValues = [
          [first_name, last_name, club_name, height, age, position, shirt_number]
        ];
      
        connect.connection.query(PlayerSQL, [PlayerValues], function (err, result) {
          if (err) throw err;
        });
      
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
                "INSERT INTO lcfc_scouting.centre_midfielder_reports(player_id, scouted_by, control_under_pressure, bravery_in_posession, short_passing, switching_play, running_with_the_ball, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, shooting, crossing, defending_one_v_one, defending_ariel_ability, tackling, closing_down, recovery_runs, marking, agility, finding_space, vision, creativity, speed, movement_skills, work_rate, strength, communication, concentration, commitment, emotional_control, confidence, rating, notes) VALUES ?";
              var values = [
                [
                  results[0].player_id, scouted_by, control_under_pressure, bravery_in_posession, short_passing, switching_play, running_with_the_ball, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, shooting, crossing, defending_one_v_one,
                  defending_ariel_ability, tackling, closing_down, recovery_runs, marking, agility, finding_space, vision, creativity, speed, movement_skills, work_rate,
                  strength, communication, concentration, commitment, emotional_control, confidence, rating, notes
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