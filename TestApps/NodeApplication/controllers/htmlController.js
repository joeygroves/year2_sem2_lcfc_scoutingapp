'use strict';

var bodyParser = require('body-parser');
var mysql = require('mysql');
var globalresult;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
});	
	
app.post('/person', urlencodedParser, function(req, res) {
	

	

	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "alumwelljamie3",
		database: "Jamie",
		port: 3306
	});
		  
	function get_Log_In_Info(data,callback){
		con.connect(function(err) {
			if (err) res.send("Nope");
				console.log("Connected!");
				var sql = "SELECT * FROM People WHERE FName = '"+req.body.firstname+"' AND LName = '"+  req.body.lastname+ "' ";
				con.query(sql, function (err, result) {
				console.log(sql)
				console.log(result);
				
				return result;
			
		
		});

	});
		
	}

	
	if(get_Log_In_Info() != []){

		res.send("Hello");
	
	}else if (get_Log_In_Info() == []){

		res.send("Nope");
	}



		

	
	
})

}