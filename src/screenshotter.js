var Nightmare = require('nightmare');

exports.getScreenshot = getScreenshot;

function getScreenshot(uri,baseSavePath, callback) {
	function noop() {}
	var endUrl = '',
		basePath = baseSavePath,
		imageKey = Math.floor(Date.now() / 1000).toString(16),
		filename =  basePath + imageKey + '.png'; 

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
			callback(returnValue);
		});
}




