var app = require('express')();
var screenshotter = require('./screenshotter.js');
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.post('/', function(req,res){
	screenshotter.getScreenshot(req.body.url, function(rv) {
		res.json(rv);
	});
});

var server = app.listen(80, function() {
	console.log("Listening on 80");
});