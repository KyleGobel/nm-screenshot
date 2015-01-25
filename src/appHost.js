var app = require('express')(),
	config = require('./config'),
	bodyParser = require('body-parser'),
	screenshotter = require('./screenshotter.js'),
	redis = require('redis'),
	client = redis.createClient(config.redis.port, config.redis.address, {});


if (config.redis.authRequired) {
	client.auth(config.redis.password, function() {});
}

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', req.get("Access-Control-Request-Headers"));

	next();
});

app.post('/', function(req,res){
	screenshotter.getScreenshot(req.body.url,client, function(rv) {
		screenshotter.cropImage(rv.imageKey, 1080, 800);
		res.json(rv);
	});
});

app.get('/image', function(req,res) {
	var imageKey = req.query.key;

	client.get(config.prefixImageKey + imageKey, function(err, reply){
		if (reply !== null)	{
			res.sendFile(reply);
		}
		else
		{
			res.send("No such key found");
		}
	});

});

var server = app.listen(config.port, function() {
	console.log("Listening on " + config.port);
});