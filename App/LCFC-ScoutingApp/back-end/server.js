const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({

  host: 'localhost',

  user: 'root',

  password: 'alumwelljamie3',

  database: 'LCFC_Scouting'

});


app.use(session({

  secret: 'secret',

  resave: true,

  saveUninitialized: true

}));

// -------------------------------------------------------------------------------------------  Log In and Log Out --------------------------------------------------------------------------------------
// Log In
app.post('/api/LogInAuthentication', (req, res) => {

  console.log(req.body);

  var username = req.body.username;

  var password = req.body.password;

  if (username && password) {

    connection.query('SELECT * FROM staff WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {

      if (results.length > 0) {

        req.session.loggedin = true;

        req.session.username = username;

        res.send("LoggedIn");

      } else {

        res.send("IncorrectUsernameOrPassword");

      }

    });

  } else {

    res.send("Empty");

  }

});

// Log Out Function

app.get('/api/LogOutAuthentication', (req, res) => {

  if (req.session.loggedin) {

    req.session.loggedin = false;

    res.send("LoggedOut");

  } else {

    res.send("NotSignedIn");

  }

  res.end();

});

// ---------------------------------------------------------------------------------------------------------- Get Player Data --------------------------------------------------------------------------------------

app.post('/api/getPosition', (req, res) => {

  var id = req.body.playerID;
  console.log(id)

  var PlayerSQL = "SELECT player.position AS 'Position' from lcfc_scouting.player where player.player_id = ?";
  var PlayerValues = [[id]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) {
      throw err;

    } else {

      res.send(result[0].Position)
    }

  })

});



app.post('/api/getPlayerData', (req, res) => {

  var id = req.body.playerID;
  console.log(id)

  var PlayerSQL = "SELECT player.position AS 'Position' from lcfc_scouting.player where player.player_id = ?";
  var PlayerValues = [[id]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) {
      throw err;

    } else {

      if (result[0].Position == 'Goalkeeper') {

        var GoalkeeperSQL = "SELECT * FROM goalkeeper_reports where goalkeeper_reports.player_id = ?"
        var GoalkeerpSQLID = [[req.body.playerID]]

        connection.query(GoalkeeperSQL, [GoalkeerpSQLID], function (err, result) {
          if (err) {

            throw err;

          } else {

            res.send(result)
          }

        })
      } else if (result[0].Position == 'Centre Back') {

        var CentreBackSQL = "SELECT * FROM centre_back_reports where centre_back_reports.player_id = ?"
        var CentreBackSQLID = [[req.body.playerID]]

        connection.query(CentreBackSQL, [CentreBackSQLID], function (err, result) {
          if (err) {

            throw err;

          } else {
            console.log(result)

            res.send(result)
          }

        })
      } else if (result[0].Position == 'Full Back') {

        var CentreBackSQL = "SELECT * FROM full_back_reports where full_back_reports.player_id = ?"
        var CentreBackSQLID = [[req.body.playerID]]

        connection.query(CentreBackSQL, [CentreBackSQLID], function (err, result) {
          if (err) {

            throw err;

          } else {

            res.send(result)
          }

        })
      } else if (result[0].Position == 'Wide Midfielder') {

        var CentreBackSQL = "SELECT * FROM wide_midfielder_reports where wide_midfielder_reports.player_id = ?"
        var CentreBackSQLID = [[req.body.playerID]]

        connection.query(CentreBackSQL, [CentreBackSQLID], function (err, result) {
          if (err) {

            throw err;

          } else {

            res.send(result)
          }

        })
      } else if (result[0].Position == 'Centre Midfielder') {

        var CentreBackSQL = "SELECT * FROM centre_midfielder_reports where centre_midfielder_reports.player_id = ?"
        var CentreBackSQLID = [[req.body.playerID]]

        connection.query(CentreBackSQL, [CentreBackSQLID], function (err, result) {
          if (err) {

            throw err;

          } else {

            res.send(result)
          }

        })
      }else if (result[0].Position == 'Striker') {

        var CentreBackSQL = "SELECT * FROM striker_reports where striker_reports.player_id = ?"
        var CentreBackSQLID = [[req.body.playerID]]

        connection.query(CentreBackSQL, [CentreBackSQLID], function (err, result) {
          if (err) {

            throw err;

          } else {

            res.send(result)
          }

        })
      }

    }
  });

  connection.close
})



// ------------------------------------------------------------------------------------------------------- Admin Info -----------------------------------------------------------------------------------


// Retrievng all Users 

app.post('/api/GetScoutsReports', (req, res) => {

  if (req.session.loggedin) {

    connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',goalkeeper_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',wide_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position', player.player_id from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',centre_midfielder_reports.rating AS 'Grade', player.height AS 'Height', player.position as 'Position'  , player.player_id from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',full_back_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position', player.player_id from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age',striker_reports.rating AS 'Grade', player.height AS 'Height' , player.position as 'Position' , player.player_id from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?",
      [req.session.username, req.session.username, req.session.username, req.session.username, req.session.username, req.session.username], function (error, results, fields) {



        res.send(results);


        console.log(results);


      });

  } else {

    console.log('Wrong');

    res.send("Not Logged In");

  }

});



// --------------------------------------------------------------------------------------------------------- Get User Information -----------------------------------------------------------------------

// Get Username Of the Session

app.post('/api/getUsername', (req, res) => {

  res.send(req.session.username);

});


// -------------------------------------------------------------------------------------------------------- Insert Into Goalkeeper  ---------------------------------------------------------------------------------


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
  var control_when_recieving = req.body.control_when_recieving;
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

      var sql = "INSERT INTO lcfc_scouting.goalkeeper_reports (player_id,scouted_by,handling,shot_stopping,tendancy_to_punch,tendancy_to_catch,positioning,recovery_saves,control_when_receiving,right_foot,left_foot,dead_ball_kicks,kicking_out_of_hands,throwing,kicking_under_pressure,kicking_when_given_time,dealing_with_crosses,starting_position,one_v_one,dealing_with_through_ball,agility,reactions,strength,speed,bravery,leadership,presence,communication,reaction_to_mistake,rating,notes) VALUES ?";
      var values = [[results[0].player_id, scouted_by, handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_recieving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake, rating, notes]];

      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    };


  })
}
);

// --------------------------------------------------------------------------------------------------------------------- Insert into Fullback ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------------------------- Insert Wide Midfielder------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ?";
  connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, wmresults) {
    if (err) {
      throw err;
    } else {

      console.log(wmresults.length);
      console.log();

      var sql = "INSERT INTO lcfc_scouting.wide_midfielder_reports (player_id,scouted_by,control,receiving_under_pressure,short_passing,switching_play,right_foot,left_foot,attacking_one_v_one,attacking_ariel_ability,dribbling,shooting,crossing,defending_one_v_one,defending_ariel_ability,supporting_full_back,tackling,pressing,positional_awareness,recovery_runs,tracking_runners,agility,coming_in_off_the_line,finding_space_out_wide,link_up_with_full_back,willingness_to_get_forward,pace,speed_when_dribbling,strength,work_rate,bravery,leadership,teamwork,communication,response_to_criticism,reaction_to_mistakes,rating,notes)  VALUES ?";
      var values = [[wmresults[0].player_id, scouted_by, control, receiving_under_pressure, short_passing, switching_play, right_foot, left_foot, attacking_one_v_one, attacking_ariel_ability, dribbling, shooting, crossing, defending_one_v_one, defending_ariel_ability, supporting_full_back, tackling, pressing, positional_awareness, recovery_runs, tracking_runners, agility, coming_in_off_the_line, finding_space_out_wide, link_up_with_full_back, willingness_to_get_forward, pace,
        speed_when_dribbling, strength, work_rate, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes]];

      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    };


  })
}
);


//--------------------------------------------------------------------------------------------------------------------------------Insert Into CB----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
  var playerID;


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ?"; connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, results) {
    if (err) {
      throw err;
    } else {

      console.log(results.length);
      console.log();

      var sql = "INSERT INTO lcfc_scouting.centre_back_reports (player_id,scouted_by,receiving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_receive, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake, rating, notes) VALUES ?";
      var values = [[results[0].player_id, scouted_by, recieving_under_pressure, short_passing, long_passing, carrying_the_ball_forward, right_foot, left_foot, threat_at_set_plays, attacking_ariel_ability, one_v_one, defending_ariel_ability, tackling, marking, interceptions, sensing_danger, defending_crosses, pressing, recovery_runs, tracking_runners, agility, angles_to_recieve, distances, recovering_to_shape, pace_when_turning, jump, mobility, strength, aggression, bravery, leadership, team_work, communication, response_to_criticism, reaction_to_mistake, rating, notes]];

      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    };


  })
}
);

// ------------------------------------------------------------------------Insert Into Centre Mid------------------------------------------------------------------

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

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL =
    "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST( ? AS DECIMAL) AND age = ? AND position = ?";
  connection.query(
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

        connection.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
        });
      }
    }
  );
});

// --------------------------------------------------------------------------------------------- Insert into Striker ------------------------------------------------------

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

  //Player Info
  var playerID;


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position,shirt_number) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]];

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST( ? AS DECIMAL) AND age = ? AND position = ?";
  connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, results) {
    if (err) {
      throw err;
    } else {

      console.log(results.length);
      console.log();

      var sql = "INSERT INTO lcfc_scouting.striker_reports (player_id,scouted_by,hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, ariel_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two,  tackling,  pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes ) VALUES ?";
      var values = [[results[0].player_id, scouted_by, hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, aerial_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two, tackling, pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes]];

      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    };



  })
}
);


// --------------------------------------------------------------------------------------------------------------------- Server ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

  });

}

app.listen(port, () => console.log(`Listening on port ${port}`));