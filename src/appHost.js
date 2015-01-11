var app = require('express')();
var screenshotter = require('./screenshotter.js');
var bodyParser = require('body-parser');

var baseSavePath = '/photos/'

app.use(bodyParser.json());

app.post('/', function(req,res){
	screenshotter.getScreenshot(req.body.url,baseSavePath, function(rv) {
		res.json(rv);
	});
});

app.get('/image', function(req,res) {
	var imageKey = req.query.key;
	
	res.sendFile(baseSavePath + imageKey + '.png');
});

var server = app.listen(80, function() {
	console.log("Listening on 80");
});