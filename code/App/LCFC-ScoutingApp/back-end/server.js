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

  password: 'password69%',

  database: 'LCFC_Scouting'

});


app.use(session({

  secret: 'secret',

  resave: true,

  saveUninitialized: true

}));

// --------------------------------------------------------------------------------------------------------------------- Server --------------------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

  });

}

app.listen(port, () => console.log(`Listening on port ${port}`));


// ------------------------------------------------------------------------------------------------------  Log In and Log Out --------------------------------------------------------------------------------------

// Log In
require('../back-end/login_authenticators/login_function')(app);

// Log Out Function
require('../back-end/login_authenticators/logout_function')(app);

// ------------------------------------------------------------------------------------------------------------ Admin Info -----------------------------------------------------------------------------------

// Retrievng all Users 
require('../back-end/route_handlers/get/get_ScoutsReports')(app);

// --------------------------------------------------------------------------------------------------------- Get User Information -----------------------------------------------------------------------

// Get Username Of the Session
app.post('/api/getUsername', (req, res) => {

  res.send(req.session.username);

});

// -------------------------------------------------------------------------------------------------------- Insert into Goalkeeper ---------------------------------------------------------------------------------

require('../back-end/route_handlers/post/post_Goalkeeper')(app);

// --------------------------------------------------------------------------------------------------------- Insert into Fullback ------------------------------------------------------------

require('../back-end/route_handlers/post/post_fullBack')(app);

// --------------------------------------------------------------------------------------------------------- Insert into Centre Midfielder ------------------------------------------------------------

require('../back-end/route_handlers/post/post_centreMid')(app);