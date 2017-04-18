var express = require('express'),
 	app = express(),
	bodyParser = require('body-parser');
var connection = require ('./config/config.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./controller'));

var port = process.env.PORT || 8081;
	app.listen(port,function(){
    connection.mongoconnection();
		console.log('Server is running on port :: ',+port);
	});
