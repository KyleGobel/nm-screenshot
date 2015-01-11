var Nightmare = require('nightmare'),
	config = require('./config');

exports.getScreenshot = getScreenshot;

function getScreenshot(uri, redisClient, callback) {
	function noop() {}
	var endUrl = '',
		imageKey = Math.floor(Date.now() / 1000).toString(16),
		filename =  config.imageSavePath + imageKey + '.png'; 

	new Nightmare()
		.viewport(1080, 1920)
		//hide this garbage
		.on('consoleMessage', noop)
		.on('alert', noop)
		.on('prompt', noop)
		.on('confirm', noop)
		.on('error', noop)
		.goto(uri)
		.wait()
		.url(function(url) {
			endUrl = url;
		})
		.screenshot(filename)
		.run(function() {
			var returnValue = { 
				url : endUrl,
				imageKey: imageKey
			};
			redisClient.set(config.prefixImageKey + imageKey, filename);
			callback(returnValue);
		});
}




