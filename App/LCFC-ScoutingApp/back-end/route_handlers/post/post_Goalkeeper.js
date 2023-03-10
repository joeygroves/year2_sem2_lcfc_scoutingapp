

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


module.exports = function (app) {

  app.post('/api/goalkeeper', (req, res) => {

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var club_name = req.body.club_name;
    var height = req.body.height;
    var age = req.body.age
    var date_played = req.body.date_played;
    var club_played = req.body.club_played;
    var ht_score = req.body.ht_score;
    var ft_score = req.body.ft_score;
    var position = 'Goalkeeper'
    var shirt_number = req.body.shirt_number;

    var scouted_by = req.session.username
    var handling = req.body.handling;
    var shot_stopping = req.body.shot_stopping;
    var tendancy_to_punch = req.body.tendancy_to_punch;
    var tendancy_to_catch = req.body.tendancy_to_catch;
    var positioning = req.body.positioning;
    var recovery_saves = req.body.recovery_saves;
    var control_when_receiving = req.body.control_when_receiving;
    var right_foot = req.body.right_foot;
    var left_foot = req.body.left_foot;
    var dead_ball_kicks = req.body.dead_ball_kicks;
    var kicking_out_of_hands = req.body.kicking_out_of_hands;
    var throwing = req.body.throwing;
    var kicking_under_pressure = req.body.kicking_under_pressure;
    var kicking_when_given_time = req.body.kicking_when_given_time;
    var dealing_with_crosses = req.body.dealing_with_crosses;
    var starting_position = req.body.starting_position;
    var one_v_one = req.body.one_v_one;
    var dealing_with_through_ball = req.body.dealing_with_through_ball;
    var agility = req.body.agility;
    var reactions = req.body.reactions;
    var strength = req.body.strength;
    var speed = req.body.speed;
    var bravery = req.body.bravery;
    var leadership = req.body.leadership;
    var presence = req.body.presence;
    var communication = req.body.communication;
    var reaction_to_mistake = req.body.reaction_to_mistake;
    var rating = req.body.rating;
    var notes = req.body.notes;
    var summary = "";
    var average = 0.0;
    var points = 0;
    var threshold = 1;
    var playerID;


    ////null input to database if no value entered by scout

    if (handling == '') {
      var handling = null
    }

    if (shot_stopping == '') {
      var shot_stopping = null
    }


    if (tendancy_to_punch == '') {
      var tendancy_to_punch = null
    }

    if (tendancy_to_catch == '') {
      var tendancy_to_catch = null
    }


    if (positioning == '') {
      var positioning = null
    }

    if (recovery_saves == '') {
      var recovery_saves = null
    }

    if (control_when_recieving == '') {
      var control_when_recieving = null
    }

    if (right_foot == '') {
      var right_foot = null
    }

    if (left_foot == '') {
      var left_foot = null
    }

    if (dead_ball_kicks == '') {
      var dead_ball_kicks = null
    }


    if (kicking_out_of_hands == '') {
      var kicking_out_of_hands = null
    }


    if (throwing == '') {
      var throwing = null
    }


    if (kicking_under_pressure == '') {
      var kicking_under_pressure = null
    }


    if (kicking_when_given_time == '') {
      var kicking_when_given_time = null
    }


    if (dealing_with_crosses == '') {
      var dealing_with_crosses = null
    }


    if (starting_position == '') {
      var starting_position = null
    }


    if (one_v_one == '') {
      var one_v_one = null
    }


    if (dealing_with_through_ball == '') {
      var dealing_with_through_ball = null
    }


    if (agility == '') {
      var agility = null
    }


    0
    if (reactions == '') {
      var reactions = null
    }

    if (strength == '') {
      var strength = null
    }


    if (speed == '') {
      var speed = null
    }


    if (bravery == '') {
      var bravery = null
    }


    if (leadership == '') {
      var leadership = null
    }


    if (presence == '') {
      var presence = null
    }


    if (communication == '') {
      var communication = null
    }


    if (reaction_to_mistake == '') {
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
    var attributes = [handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_receiving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake];
    var attributenames = ['handling', 'shot stopping', 'tendancy to punch', 'tendancy to catch', 'positioning', 'recovery saves', 'control when receiving', 'right foot', 'left foot', 'dead ball kicks', 'kicking out of hands', 'throwing', 'kicking under pressure', 'kicking when given time', 'dealing with crosses', 'starting position', 'one v one', 'dealing with through ball', 'agility', 'reactions', 'strength', 'speed', 'bravery', 'leadership', 'presence', 'communication', 'reaction to mistake'];
    var outstandinglabel = [];
    var outstandingscore = [];
    var i;
    for (i = 0; i <= (attributes.length - 1); i++) {
      if (!(isNaN(attributes[i]))) {
        points = points + Math.round(attributes[i]);
      }
    };
    average = Math.round(points / attributes.length);


    console.log(points, average)
    var summary = last_name + ", " + first_name + " was scouted playing for " + club_name + " on " + date_played + ". " + last_name + ", " + first_name + " performed to grade " + rating + " with an average score of " + average + " showing some outstanding attributes";

    for (i = 0; i <= (attributes.length - 1); i++) {
      if (!(isNaN(attributes[i]))) {
        if ((attributes[i] - threshold) > average) {
          outstandinglabel[i] = attributenames[i];
          outstandingscore[i] = attributes[i];
          summary += ", " + outstandinglabel[i] + " (" + outstandingscore[i] + ")"
        };
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

        var sql = "INSERT INTO lcfc_scouting.goalkeeper_reports (player_id, scouted_by, handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_receiving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake, rating, notes, summary) VALUES ?";

        var values = [[results[0].player_id, scouted_by, handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_recieving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake, rating, notes, summary]];

        connect.connection.query(sql, [values], function (err, result) {

          if (err) {
            throw err;
          } else {

            var excel = require('excel4node');

            // Create a new instance of a Workbook class
            var workbook = new excel.Workbook();

            // Add Worksheets to the workbook
            var worksheet = workbook.addWorksheet('Sheet 1');

            var myStyle = workbook.createStyle({
              alignment: {
                wrapText: true,
                horizontal: 'center',
              },
            });

            worksheet.cell(1, 7).string('Fixture');
            worksheet.cell(1, 8, 1, 12, true).string(club_name + " vs " + club_played);

            worksheet.cell(4, 3, 8, 4, true).string("Goalkeeper").style(myStyle);;
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
            worksheet.cell(13, 1, 13, 2, true).string('Handling');
            worksheet.cell(13, 3).string(handling);
            worksheet.cell(14, 1, 14, 2, true).string('Shot Stopping');
            worksheet.cell(14, 3).string(shot_stopping);
            worksheet.cell(15, 1, 15, 2, true).string('Tendancy To Punch');
            worksheet.cell(15, 3).string(tendancy_to_punch);
            worksheet.cell(16, 1, 16, 2, true).string('Tendancy To Catch');
            worksheet.cell(16, 3).string(tendancy_to_catch);
            worksheet.cell(17, 1, 17, 2, true).string('Positioning');
            worksheet.cell(17, 3).string(positioning);
            worksheet.cell(18, 1, 18, 2, true).string('Recovery Saves');
            worksheet.cell(18, 3).string(recovery_saves);
            worksheet.cell(19, 1, 19, 2, true).string('Control When Recieving');
            worksheet.cell(19, 3).string(control_when_recieving);
            worksheet.cell(20, 1, 20, 2, true).string('Right Foot');
            worksheet.cell(20, 3).string(right_foot);
            worksheet.cell(21, 1, 21, 2, true).string('Left Foot');
            worksheet.cell(21, 3).string(left_foot);

            generalattributes = [handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_recieving, right_foot, left_foot]

            general_counter = 0;
            general_possiblepoints = 0;
            for (i = 0; i <= (generalattributes.length - 1); i++) {
              if (!(generalattributes[i] == null)) {
                general_counter++;
                general_possiblepoints += Math.round(generalattributes[i]);
              };
            };
            if ((general_counter) == 0) {

              general_percentage = 0;

            } else {

              general_percentage = (general_possiblepoints / general_counter) * 10

            }


            worksheet.cell(23, 2).string("Points")
            worksheet.cell(24, 2).string("Percentage")
            worksheet.cell(23, 3).number(general_possiblepoints)
            worksheet.cell(24, 3).number(general_percentage)
            worksheet.cell(24, 4).string("%")


            worksheet.cell(12, 4, 12, 6, true).string('Distribution');
            worksheet.cell(13, 4, 13, 5, true).string('Dead Ball Kicks');
            worksheet.cell(13, 6).string(dead_ball_kicks);
            worksheet.cell(14, 4, 14, 5, true).string('Kicking Out Of Hands');
            worksheet.cell(14, 6).string(kicking_out_of_hands);
            worksheet.cell(15, 4, 15, 5, true).string('Throwing');
            worksheet.cell(15, 6).string(throwing);
            worksheet.cell(16, 4, 16, 5, true).string('Kicking Under Pressure');
            worksheet.cell(16, 6).string(kicking_under_pressure);
            worksheet.cell(17, 4, 17, 5, true).string('Kicking When Given Time');
            worksheet.cell(17, 6).string(kicking_when_given_time);

            distributionattributes = [dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time]

            distribution_counter = 0;
            distribution_possiblepoints = 0;
            for (i = 0; i <= (distributionattributes.length - 1); i++) {
              if (!(distributionattributes[i] == null)) {
                distribution_counter++;
                distribution_possiblepoints += Math.round(distributionattributes[i]);
              };
            };

            if ((distribution_counter) == 0) {

              distribution_percentage = 0;

            } else {

              distribution_percentage = (distribution_possiblepoints / distribution_counter) * 10

            }

            worksheet.cell(23, 5).string("Points")
            worksheet.cell(24, 5).string("Percentage")
            worksheet.cell(23, 6).number(distribution_possiblepoints)
            worksheet.cell(24, 6).number(distribution_percentage)
            worksheet.cell(24, 7).string("%")


            worksheet.cell(12, 7, 12, 9, true).string('Decision Making');
            worksheet.cell(13, 7, 13, 8, true).string('Dealing With Crosses');
            worksheet.cell(13, 9).string(dealing_with_crosses);
            worksheet.cell(14, 7, 14, 8, true).string('Starting Position');
            worksheet.cell(14, 9).string(starting_position);
            worksheet.cell(15, 7, 15, 8, true).string('1 V 1');
            worksheet.cell(15, 9).string(one_v_one);
            worksheet.cell(16, 7, 16, 8, true).string('Dealing With Through Ball');
            worksheet.cell(16, 9).string(dealing_with_through_ball);
            worksheet.cell(17, 7, 17, 8, true).string('Tendancy To Punch');
            worksheet.cell(17, 9).string(tendancy_to_punch);
            worksheet.cell(18, 7, 18, 8, true).string('Tendancy To Catch');
            worksheet.cell(18, 9).string(tendancy_to_catch);

            decision_makingattributes = [dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, tendancy_to_punch, tendancy_to_catch]

            decision_making_counter = 0;
            decision_making_possiblepoints = 0;
            for (i = 0; i <= (decision_makingattributes.length - 1); i++) {
              if (!(decision_makingattributes[i] == null)) {
                decision_making_counter++;
                decision_making_possiblepoints += Math.round(decision_makingattributes[i]);
              };
            };

            if ((decision_making_counter) == 0) {

              decision_making_percentage = 0;
            } else {

              decision_making_percentage = (decision_making_possiblepoints / decision_making_counter) * 10

            }

            worksheet.cell(23, 8).string("Points")
            worksheet.cell(24, 8).string("Percentage")
            worksheet.cell(23, 9).number(decision_making_possiblepoints)
            worksheet.cell(24, 9).number(decision_making_percentage)
            worksheet.cell(24, 10).string("%")


            worksheet.cell(12, 10, 12, 12, true).string('Physical');
            worksheet.cell(13, 10, 13, 11, true).string('Agility');
            worksheet.cell(13, 12).string(agility);
            worksheet.cell(14, 10, 14, 11, true).string('Reactions');
            worksheet.cell(14, 12).string(reactions);
            worksheet.cell(15, 10, 15, 11, true).string('Strength');
            worksheet.cell(15, 12).string(strength);
            worksheet.cell(16, 10, 16, 11, true).string('Speed');
            worksheet.cell(16, 12).string(speed);


            phsyicalattributes = [agility, reactions, strength, speed]

            physical_counter = 0;
            physical_possiblepoints = 0;
            for (i = 0; i <= (physicalattributes.length - 1); i++) {
              if (!(physicalattributes[i] == null)) {
                physical_counter++;
                physical_possiblepoints += Math.round(physicalattributes[i]);
              };
            };

            if ((physical_counter) == 0) {

              phsyical_percentage = 0;

            } else {

              phsyical_percentage = (physical_possiblepoints / physical_counter) * 10

            }

            worksheet.cell(23, 11).string("Points")
            worksheet.cell(24, 11).string("Percentage")
            worksheet.cell(23, 12).number(phsyical_possiblepoints)
            worksheet.cell(24, 12).number(phsyical_percentage)
            worksheet.cell(24, 13).string("%")

            worksheet.cell(12, 13, 12, 15, true).string('Psychological');
            worksheet.cell(13, 13, 13, 14, true).string('Bravery');
            worksheet.cell(13, 15).string(bravery);
            worksheet.cell(14, 13, 14, 14, true).string('Leadership');
            worksheet.cell(14, 15).string(leadership);
            worksheet.cell(15, 13, 15, 14, true).string('Presence/Aura');
            worksheet.cell(15, 15).string(presence);
            worksheet.cell(16, 13, 16, 14, true).string('Communication');
            worksheet.cell(16, 15).string(communication);
            worksheet.cell(17, 13, 17, 14, true).string('Reactions To Mistake');
            worksheet.cell(17, 15).string(reaction_to_mistake);

            psychologicalattributes = [bravery, leadership, presence, communication, reaction_to_mistake, reaction_to_mistake]

            psychological_counter = 0;
            psychological_possiblepoints = 0;
            for (i = 0; i <= (psychologicalattributes.length - 1); i++) {
              if (!(psychologicalattributes[i] == null)) {
                psychological_counter++;
                psychological_possiblepoints += Math.round(psychologicalattributes[i]);
              };
            };

            if ((psychological_counter) == 0) {

              psychological_percentage = 0;

            } else {

              psychological_percentage = (psychological_possiblepoints / psychological_counter) * 10

            }

            worksheet.cell(23, 14).string("Points")
            worksheet.cell(24, 14).string("Percentage")
            worksheet.cell(23, 15).number(psychological_possiblepoints)
            worksheet.cell(24, 15).number(psychological_percentage)
            worksheet.cell(24, 16).string("%")


            worksheet.cell(26, 7, 26, 10, true).string('Grand Total Marks (290)');
            worksheet.cell(26, 11).number(phsyical_possiblepoints + psychological_possiblepoints + decision_making_possiblepoints + distribution_possiblepoints + general_possiblepoints);

            worksheet.cell(28, 7, 28, 10, true).string('Overall % Score');
            worksheet.cell(28, 11).formula('AVERAGE(C24,F24,I24,L24,O24,R24)');
            worksheet.cell(28, 12).string("%")

            worksheet.cell(29, 1, 29, 18, true).string('Notes');
            worksheet.cell(30, 1, 32, 18, true).string(notes);

            worksheet.cell(33, 1, 33, 18, true).string('Summary');
            worksheet.cell(34, 1, 36, 18, true).string(summary).style(myStyle);


            worksheet.cell(37, 4, 37, 7, true).string('Player Rating');
            worksheet.cell(37, 8).string(rating);

            workbook.write('Report.xlsx');

          }
        });
      }
    }
    );

    setTimeout(() => { require('../../email/email_app')(app) }, 10000);





  }

  )
}