var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const port = process.env.PORT || 5000;
var ip = require('ip');
 
ip = ip.address()

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'alumwelljamie3',
	database : 'nodelogin'
});

var app = express();

app.use(express.static(__dirname + '/views'));


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.render(path.join(__dirname + '/login.ejs'));
});

app.post('/person', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				// response.render(path.join(__dirname + '/homepage.ejs'));
				 return response.redirect('http://'+ip+':3000/HomePage')
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/LogOut', function(request, response) {
	if (request.session.loggedin) {
		request.session.loggedin = false;
		response.send("Logged out");
	} else {
		response.send("You're Not Signed In");
	}
	response.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`));



app.get('/hello', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

