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

// ------------------------------------------------------------------------------------------------------- Admin Info -----------------------------------------------------------------------------------


// Retrievng all Users 

app.post('/api/GetScoutsReports', (req, res) => {

  if (req.session.loggedin) {

    connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from player inner join goalkeeper_reports on goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from player inner join wide_midfielder_reports on wide_midfielder_reports.player_id = player.player_id and wide_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from player inner join centre_back_reports on centre_back_reports.player_id = player.player_id and centre_back_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from player inner join centre_midfielder_reports on centre_midfielder_reports.player_id = player.player_id and centre_midfielder_reports.scouted_by = ? union select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from player inner join full_back_reports on full_back_reports.player_id = player.player_id and full_back_reports.scouted_by = ? union select player.first_name AS 'FirstName' ,player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from player inner join striker_reports on striker_reports.player_id = player.player_id and striker_reports.scouted_by = ?",
      [req.session.username,req.session.username,req.session.username,req.session.username,req.session.username,req.session.username], function (error, results, fields) {



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


// -------------------------------------------------------------------------------------------------------- Insert Into ---------------------------------------------------------------------------------


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



  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ? AND club = ? AND CAST(height AS DECIMAL) = CAST(? AS DECIMAL) AND age = ? AND position = ?";
  connection.query(PlayerIDSQL, [first_name, last_name, club_name, height, age, position], function (err, results) {
    if (err) {
      throw err;
    } else {

      console.log(results.length);
      console.log();

      var sql = "INSERT INTO lcfc_scouting.goalkeeper_reports (player_id,scouted_by,handling,shot_stopping,tendancy_to_punch,tendancy_to_catch,positioning,recovery_saves,control_when_recieving,right_foot,left_foot,dead_ball_kicks,kicking_out_of_hands,throwing,kicking_under_pressure,kicking_when_given_time,dealing_with_crosses,starting_position,one_v_one,dealing_with_through_ball,agility,reactions,strength,speed,bravery,leadership,presence,communication,reaction_to_mistake,rating,notes) VALUES ?";
      var values = [[results[0].player_id, scouted_by, handling, shot_stopping, tendancy_to_punch, tendancy_to_catch, positioning, recovery_saves, control_when_recieving, right_foot, left_foot, dead_ball_kicks, kicking_out_of_hands, throwing, kicking_under_pressure, kicking_when_given_time, dealing_with_crosses, starting_position, one_v_one, dealing_with_through_ball, agility, reactions, strength, speed, bravery, leadership, presence, communication, reaction_to_mistake, rating, notes]];

      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    };


  })
}
);

// ------------------------------------------------------------------------------------------------------------------------------------------------ Insert Wide Fielder -------------------------------------

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


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position]]

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

      var sql = "INSERT INTO lcfc_scouting.wide_midfielder_reports (player_id,scouted_by,control,recieving_under_pressure,short_passing,switching_play,right_foot,left_foot,attacking_one_v_one,attacking_ariel_ability,dribbling,shooting,crossing,defending_one_v_one,defending_ariel_ability,supporting_full_back,tackling,pressing,positional_awareness,recovery_runs,tracking_runners,agility,coming_in_off_the_line,finding_space_out_wide,link_up_with_full_back,willingness_to_get_forward,pace,speed_when_dribbling,strength,work_rate,bravery,leadership,teamwork,communication,response_to_criticism,reaction_to_mistakes,rating,notes)  VALUES ?";
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

// --------------------------------------------------------------------------------------------------------------------- Server --------------------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

  });

}

app.listen(port, () => console.log(`Listening on port ${port}`));