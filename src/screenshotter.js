var Nightmare = require('nightmare');

function noop() {}

var filename =  Math.floor(Date.now() / 1000).toString(16) + '.png'; 
var endUrl = '';
if (process.argv.length == 3)
{
	var uri = process.argv[2];
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
				filename: filename
			};
			console.log(JSON.stringify(returnValue));
		});
}
else
{
	console.log("invalid number of args, expected <uri>")
}
