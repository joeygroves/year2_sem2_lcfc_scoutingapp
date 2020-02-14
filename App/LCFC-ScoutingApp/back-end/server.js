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


// API calls
app.get('/api/logout', (req, res) => {

  if (req.session.loggedin) {
    req.session.loggedin = false;
    res.send("Logged out");
  } else {
    res.send("You're Not Signed In");
  }
  res.end();

});

app.post('/api/hello', (req, res) => {

  if (req.session.loggedin) {
    connection.query('SELECT * FROM staff', function (error, results, fields) {
      console.log('Right');
      res.send(results);
    });
  } else {
    console.log('Wrong');
    res.send("Not Logged In");
  }
});


app.post('/api/world', (req, res) => {
  console.log(req.body);

  var username = req.body.post;
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

app.post('/api/gotoHome', (req, res) => {


  res.send(req.session.username);

});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.listen(port, () => console.log(`Listening on port ${port}`));