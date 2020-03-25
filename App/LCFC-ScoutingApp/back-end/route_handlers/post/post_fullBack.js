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
    var points = 0;
    var threshold = 1;

    //Player Information
    var playerID;


    //// Test for null input to database

    if (receiving_under_pressure == '') {
      var receiving_under_pressure = null
    }

    if (short_passing == '') {
      var short_passing = null
    }


    if (long_passing == '') {
      var long_passing = null
    }

    if (control == '') {
      var control = null
    }


    if (right_foot == '') {
      var right_foot = null
    }

    if (left_foot == '') {
      var left_foot = null
    }

    if (attacking_one_v_one == '') {
      var attacking_one_v_one = null
    }

    if (attacking_ariel_ability == '') {
      var attacking_ariel_ability = null
    }

    if (crossing == '') {
      var crossing = null
    }

    if (defending_one_v_one == '') {
      var defending_one_v_one = null
    }


    if (defending_ariel_ability == '') {
      var defending_ariel_ability = null
    }


    if (tackling == '') {
      var tackling = null
    }


    if (defending_far_post == '') {
      var defending_far_post = null
    }


    if (stopping_the_cross == '') {
      var stopping_the_cross = null
    }


    if (pressing == '') {
      var pressing = null
    }


    if (recovery_runs == '') {
      var recovery_runs = null
    }


    if (tracking_runners == '') {
      var tracking_runners = null
    }


    if (agility == '') {
      var agility = null
    }


    if (angles_to_recieve == '') {
      var angles_to_recieve = null
    }


    if (link_up_with_winger == '') {
      var link_up_with_winger = null
    }

    if (covering_across == '') {
      var covering_across = null
    }


    if (willlingness_to_get_forward == '') {
      var willlingness_to_get_forward = null
    }


    if (pace == '') {
      var pace = null
    }


    if (mobility == '') {
      var mobility = null
    }


    if (work_rate == '') {
      var work_rate = null
    }


    if (strength == '') {
      var strength = null
    }


    if (jump == '') {
      var jump = null
    }


    if (bravery == '') {
      var bravery = null
    }


    if (leadership == '') {
      var leadership = null
    }


    if (team_work == '') {
      var team_work = null
    }


    if (communication == '') {
      var communication = null
    }


    if (response_to_criticism == '') {
      var response_to_criticism = null
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
    var summary = first_name + " " + last_name + " was scouted playing for " + club_name + " on " + date_played + ". " + first_name + " " + last_name + " performed to grade " + rating + " with an average score of " + average + " showing some outstanding attributes";

    for (i = 0; i <= (attributes.length - 1); i++) {
      if ((attributes[i] - threshold) > average) {
        outstandinglabel[i] = attributenames[i];
        outstandingscore[i] = attributes[i];
        summary += ", " + outstandinglabel[i] + " (" + outstandingscore[i] + ")"
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
          leadership, team_work, communication, response_to_criticism,
          reaction_to_mistake,
          rating, notes, summary]];

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

            worksheet.cell(4, 3, 8, 4, true).string("Full Back").style(myStyle);;
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
            worksheet.cell(13, 1, 13, 2, true).string('Receiving Under Pressure');
            worksheet.cell(13, 3).string(receiving_under_pressure);
            worksheet.cell(14, 1, 14, 2, true).string('Short Passing');
            worksheet.cell(14, 3).string(short_passing);
            worksheet.cell(15, 1, 15, 2, true).string('Long Passing');
            worksheet.cell(15, 3).string(long_passing);
            worksheet.cell(16, 1, 16, 2, true).string('Control');
            worksheet.cell(16, 3).string(control);
            worksheet.cell(17, 1, 17, 2, true).string('Right Foot');
            worksheet.cell(17, 3).string(right_foot);
            worksheet.cell(18, 1, 18, 2, true).string('Left Foot');
            worksheet.cell(18, 3).string(left_foot);


            generalattributes = [receiving_under_pressure, short_passing, long_passing, control, right_foot, left_foot]

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


            worksheet.cell(12, 4, 12, 6, true).string('Attacking');
            worksheet.cell(13, 4, 13, 5, true).string('1v1');
            worksheet.cell(13, 6).string(attacking_one_v_one);
            worksheet.cell(14, 4, 14, 5, true).string('Aerial Ability');
            worksheet.cell(14, 6).string(attacking_ariel_ability);
            worksheet.cell(15, 4, 15, 5, true).string('Crossing');
            worksheet.cell(15, 6).string(crossing);

            attaackingattributes = [attacking_one_v_one, attacking_ariel_ability, crossing]

            attacking_counter = 0;
            attacking_possiblepoints = 0;
            for (i = 0; i <= (attaackingattributes.length - 1); i++) {
              if (!(attaackingattributes[i] == null)) {
                attacking_counter++;
                attacking_possiblepoints += Math.round(attaackingattributes[i]);
              };
            };

            if ((attacking_counter) == 0) {

              atacking_percentage = 0;

            } else {

              atacking_percentage = (attacking_possiblepoints / attacking_counter) * 10

            }

            worksheet.cell(23, 5).string("Points")
            worksheet.cell(24, 5).string("Percentage")
            worksheet.cell(23, 6).number(attacking_possiblepoints)
            worksheet.cell(24, 6).number(atacking_percentage)
            worksheet.cell(24, 7).string("%")


            worksheet.cell(12, 7, 12, 9, true).string('Defending');
            worksheet.cell(13, 7, 13, 8, true).string('1v1');
            worksheet.cell(13, 9).string(defending_one_v_one);
            worksheet.cell(14, 7, 14, 8, true).string('Aerial Ability');
            worksheet.cell(14, 9).string(defending_ariel_ability);
            worksheet.cell(15, 7, 15, 8, true).string('Tackling');
            worksheet.cell(15, 9).string(tackling);
            worksheet.cell(16, 7, 16, 8, true).string('Defending Far Post');
            worksheet.cell(16, 9).string(defending_far_post);
            worksheet.cell(17, 7, 17, 8, true).string('Stopping The Cross');
            worksheet.cell(17, 9).string(stopping_the_cross);
            worksheet.cell(18, 7, 18, 8, true).string('Pressing');
            worksheet.cell(18, 9).string(pressing);
            worksheet.cell(19, 7, 19, 8, true).string('Recovery Runs');
            worksheet.cell(19, 9).string(recovery_runs);
            worksheet.cell(20, 7, 20, 8, true).string('Tracking Runners');
            worksheet.cell(20, 9).string(tracking_runners);

            defendingattributes = [defending_one_v_one, defending_ariel_ability, tackling, defending_far_post, stopping_the_cross, pressing, recovery_runs, tracking_runners]

            defending_counter = 0;
            defending_possiblepoints = 0;
            for (i = 0; i <= (defendingattributes.length - 1); i++) {
              if (!(defendingattributes[i] == null)) {
                defending_counter++;
                defending_possiblepoints += Math.round(defendingattributes[i]);
              };
            };

            if ((defending_counter) == 0) {

              defending_percentage = 0;

            } else {

              defending_percentage = (defending_possiblepoints / defending_counter) * 10

            }


            worksheet.cell(23, 8).string("Points")
            worksheet.cell(24, 8).string("Percentage")
            worksheet.cell(23, 9).number(defending_possiblepoints)
            worksheet.cell(24, 9).number(defending_percentage)
            worksheet.cell(24, 10).string("%")


            worksheet.cell(12, 10, 12, 12, true).string('Tactical');
            worksheet.cell(13, 10, 13, 11, true).string('Agility');
            worksheet.cell(13, 12).string(agility);
            worksheet.cell(14, 10, 14, 11, true).string('Angles To Receive');
            worksheet.cell(14, 12).string(angles_to_recieve);
            worksheet.cell(15, 10, 15, 11, true).string('Linking Up With Winger');
            worksheet.cell(15, 12).string(link_up_with_winger);
            worksheet.cell(16, 10, 16, 11, true).string('Covering Across');
            worksheet.cell(16, 12).string(covering_across);
            worksheet.cell(17, 10, 17, 11, true).string('Willingness To Get Forward');
            worksheet.cell(17, 12).string(willlingness_to_get_forward);

            tacticalattributes = [agility, angles_to_recieve, link_up_with_winger, covering_across, willlingness_to_get_forward]

            tactical_counter = 0;
            tactical_possiblepoints = 0;
            for (i = 0; i <= (tacticalattributes.length - 1); i++) {
              if (!(tacticalattributes[i] == null)) {
                tactical_counter++;
                tactical_possiblepoints += Math.round(tacticalattributes[i]);
              };
            };

            if ((tactical_counter) == 0) {

              tactical_percentage = 0;

            } else {

              tactical_percentage = (tactical_possiblepoints / tactical_counter) * 10

            }

            worksheet.cell(23, 11).string("Points")
            worksheet.cell(24, 11).string("Percentage")
            worksheet.cell(23, 12).number(tactical_possiblepoints)
            worksheet.cell(24, 12).number(tactical_percentage)
            worksheet.cell(24, 13).string("%")

            worksheet.cell(12, 13, 12, 15, true).string('Physical');
            worksheet.cell(13, 13, 13, 14, true).string('Pace');
            worksheet.cell(13, 15).string(pace);
            worksheet.cell(14, 13, 14, 14, true).string('Mobility');
            worksheet.cell(14, 15).string(mobility);
            worksheet.cell(15, 13, 15, 14, true).string('Work Rate');
            worksheet.cell(15, 15).string(work_rate);
            worksheet.cell(16, 13, 16, 14, true).string('Strength');
            worksheet.cell(16, 15).string(strength);
            worksheet.cell(17, 13, 17, 14, true).string('Jump/Spring');
            worksheet.cell(17, 15).string(jump);

            physicalattributes = [pace, mobility, work_rate, strength, jump]

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

            worksheet.cell(23, 14).string("Points")
            worksheet.cell(24, 14).string("Percentage")
            worksheet.cell(23, 15).number(physical_possiblepoints)
            worksheet.cell(24, 15).number(phsyical_percentage)
            worksheet.cell(24, 16).string("%")

            worksheet.cell(12, 16, 12, 18, true).string('Psychological');
            worksheet.cell(13, 16, 13, 17, true).string('Bravery');
            worksheet.cell(13, 18).string(bravery);
            worksheet.cell(14, 16, 14, 17, true).string('Leadership');
            worksheet.cell(14, 18).string(leadership);
            worksheet.cell(15, 16, 15, 17, true).string('Team Work');
            worksheet.cell(15, 18).string(team_work);
            worksheet.cell(16, 16, 16, 17, true).string('Communication');
            worksheet.cell(16, 18).string(communicaton);
            worksheet.cell(17, 16, 17, 17, true).string('Response To Criticism');
            worksheet.cell(17, 18).string(reponse_to_criticism);
            worksheet.cell(18, 16, 18, 17, true).string('Reaction To Mistakes');
            worksheet.cell(18, 18).string(reaction_to_mistake);

            psychologicalattributes = [bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake]

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

            worksheet.cell(23, 17).string("Points")
            worksheet.cell(24, 17).string("Percentage")
            worksheet.cell(23, 18).number(psychological_possiblepoints)
            worksheet.cell(24, 18).number(psychological_percentage)
            worksheet.cell(24, 19).string("%")


            worksheet.cell(26, 7, 26, 10, true).string('Grand Total Marks (340)');
            worksheet.cell(26, 11).number(attacking_possiblepoints + psychological_possiblepoints + physical_possiblepoints + defending_possiblepoints + tactical_possiblepoints);

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