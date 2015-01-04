var Nightmare = require('nightmare');


function noop() {}
if (process.argv.length == 4)
{
	var uri = process.argv[2];
	var filename = process.argv[3];
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
			console.log('{ "url" : "' + url + '" }');
		})
		.screenshot(filename)
		.run();
}
else
{
	console.log("invalid number of args, expected <uri> <screenshot_savepath>")
}
