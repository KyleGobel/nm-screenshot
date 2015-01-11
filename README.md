nm-screenshot
=============

small utility used by diff program to take screenshots and output some info I need


install

```
#for me on windows 8.1, on ubuntu you can just install phantom first then standard npm install nightmare
npm install nightmare --python=C:\python27\python.exe --msvs_version=2013
npm install express

sudo node src/appHost.js 
```

Starts a small webserver with 2 endpoints

## ``POST /``

Post some json with a url key to a url


####Request
```
POST / 
{ "url" : "http://play.google.com" }
```

####Response

```
{
	"url" : "https://play.google.com/store",
	"imageKey" : "54b1f7d8"
}
```

The response will be the url it actually took the screenshot of, the image key will be used to retreive the screenshot


## ``GET /image?key=<imagekey>``

Will just return the screenshot for whatever key you passed 