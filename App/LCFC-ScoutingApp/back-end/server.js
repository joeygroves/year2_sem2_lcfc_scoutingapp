const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connect = require('../back-end/mysql_connection/mysql_create_connection');


app.use(session({

  secret: 'secret',

  resave: true,

  saveUninitialized: true

}));



// -------------------------------------------------------------------------------------------  Log In and Log Out --------------------------------------------------------------------------------------
// Log In
require('../back-end/login_authenticators/login_function')(app);

// Log Out Function
require('../back-end/login_authenticators/logout_function')(app);

// ------------------------------------------------------------------------------------------------------- Admin Info -----------------------------------------------------------------------------------

// Retrievng all Users 
require('../back-end/route_handlers/get/get_ScoutsReports')(app);


// -------------------------------------------------------------------------------------------------------- Insert Into Goalkeeper  ---------------------------------------------------------------------------------


require('../back-end/route_handlers/post/post_Goalkeeper')(app);

// --------------------------------------------------------------------------------------------------------------------- Insert into Fullback ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

require('../back-end/route_handlers/post/post_fullBack')(app);

// -------------------------------------------------------------------------------------------------------------------------- Insert Wide Midfielder------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

require('../back-end/route_handlers/post/post_wideMidfielder')(app);

//--------------------------------------------------------------------------------------------------------------------------------Insert Into CB----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

require('../back-end/route_handlers/post/post_centreBack')(app);

// ------------------------------------------------------------------------Insert Into Centre Mid------------------------------------------------------------------

require('../back-end/route_handlers/post/post_centreMid')(app);

// --------------------------------------------------------------------------------------------- Insert into Striker ------------------------------------------------------

require('../back-end/route_handlers/post/post_striker')(app);

// --------------------------------------------------------------------------------------------- Get Player Info ------------------------------------------------------


require('../back-end/view_reports/view_reports')(app);

// require('../back-end/email/email_app')(app);

require('../back-end/Admin/AdminData')(app);

require('../back-end/Admin/Get/getStaff')(app);

require('../back-end/Admin/Get/getScoutData')(app);

require('../back-end/Admin/Post/postStaff')(app);


// --------------------------------------------------------------------------------------------------------- Get User Information -----------------------------------------------------------------------

// Get Username Of the Session

app.post('/api/getUsername', (req, res) => {

  res.send(req.session.username);

});



// --------------------------------------------------------------------------------------------------------------------- Server ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

  });

}

app.listen(port, () => console.log(`Listening on port ${port}`));
