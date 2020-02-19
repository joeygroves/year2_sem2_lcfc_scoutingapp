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
 
  }else{
 
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

app.post('/api/GetUserInformation', (req, res) => {

  if (req.session.loggedin) {
   
    connection.query('SELECT * FROM staff', function (error, results, fields) {
   
      console.log('Right');
   
      res.send(JSON.stringify(results));
   
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

// app.post('/api/goalkeeper', (req, res) => {

//   var handling = req.body.handling;
 
//   var shot_stopping = req.body.shot_stopping;

//   var sql = "INSERT INTO Test (username, password) VALUES ?";
//   var values = [[handling,shot_stopping]];
//   connection.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
  
// });

app.post('/api/goalkeeper', (req, res) => {

  // var first_name = req.body.first_name;
  // var last_name = req.body.last_name;
  // var club_name = req.body.club_name;
  // var height = req.body.height;
  // var age = req.body.age;
  // var position = 'Goalkeeper';


  // var sql = "INSERT INTO player VALUES ?";
  // var values = [[1,first_name,last_name,club_name,height,age,position]];
  // connection.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });

  // var sql = "INSERT INTO club VALUES ?";
  // var values = [[1,club_name]];
  // connection.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });


  var date_played = req.body.date_played;
  var club_played = req.body.club_played;
  var ht_score = req.body.ht_score;
  var ft_score = req.body.ft_score;
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
  // var starting_position = req.body.starting_position;
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


  
//Add Starting Position to SQL

  var sql = "INSERT INTO lcfc_scouting.goalkeeper_reports VALUES ?";
  var values = [[1,1,1,'01/02/12',1,1,scouted_by,handling,shot_stopping,tendancy_to_punch,tendancy_to_catch,positioning,recovery_saves,control_when_recieving,right_foot,left_foot,dead_ball_kicks,kicking_out_of_hands,throwing,kicking_under_pressure,kicking_when_given_time,dealing_with_crosses,one_v_one,dealing_with_through_ball,agility,reactions,strength,speed,bravery,leadership,presence,communication,reaction_to_mistake,rating,notes]];
  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
});


// --------------------------------------------------------------------------------------------------------------------- Server --------------------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', function (req, res) {
  
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  
  });

}

app.listen(port, () => console.log(`Listening on port ${port}`));