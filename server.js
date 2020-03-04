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

  password: 'qwerty1',

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

    connection.query("select player.first_name AS 'FirstName',player.last_name AS 'LastName',player.club AS 'Club',player.age AS 'Age' from goalkeeper_reports inner join player where goalkeeper_reports.player_id = player.player_id and goalkeeper_reports.scouted_by = ?",
      [req.session.username], function (error, results, fields) {

        

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
  var playerID;


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ?";
  connection.query(PlayerIDSQL, [first_name, last_name], function (err, results) {
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


// ---------------------------------------------------------------------------------------------------------------INSERT INTO STRIKER----------------------------------------------------

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
  var ariel_ability = req.body.ariel_ability;
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


  var PlayerSQL = "INSERT INTO lcfc_scouting.player (first_name,last_name,club,height,age,position, shirt_number) VALUES ?";
  var PlayerValues = [[first_name, last_name, club_name, height, age, position, shirt_number]]

  connection.query(PlayerSQL, [PlayerValues], function (err, result) {
    if (err) throw err;
  });

  var PlayerIDSQL = "SELECT player_id FROM player where first_name = ? AND last_name = ?";
  connection.query(PlayerIDSQL, [first_name, last_name], function (err, results) {
    if (err) {
      throw err;
    } else {
      
      console.log(results.length);
      console.log();

      var sql = "INSERT INTO lcfc_scouting.striker_reports (player_id,scouted_by,hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, ariel_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two,  tackling,  pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes ) VALUES ?";
      var values = [[results[0].player_id,scouted_by,hold_up_play, receiving_under_pressure, link_up_play, right_foot, left_foot, one_v_one, ariel_ability, finishing, right_foot_shooting, left_foot_shooting, crossing, one_v_two,  tackling,  pressing, recovering_into_shape, agility, dropping_into_space, runs_off_the_shoulder, running_the_channels, movement_off_the_ball, pace, mobility, strength, work_rate, jump, bravery, leadership, teamwork, communication, response_to_criticism, reaction_to_mistakes, rating, notes]];

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