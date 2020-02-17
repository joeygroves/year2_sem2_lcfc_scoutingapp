var express = require('express');
var app = express();
var mysql = require('mysql');

var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3007;

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "alumwelljamie3",
		database: "Jamie",
		port: 3306
	});
	
	
	
	next();
});

htmlController(app);


app.listen(port);