var app = require('express')(),
	config = require('./config'),
	bodyParser = require('body-parser'),
	screenshotter = require('./screenshotter.js'),
	redis = require('redis'),
	client = redis.createClient(config.redis.port, config.redis.address, {});

if (config.redis.authRequired) {
	client.auth(redis.config.redis.password, function() {});
}

app.use(bodyParser.json());

app.post('/', function(req,res){
	screenshotter.getScreenshot(req.body.url,client, function(rv) {
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

var server = app.listen(80, function() {
	console.log("Listening on 80");
});