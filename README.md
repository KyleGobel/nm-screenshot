nm-screenshot
=============

small utility used by diff program to take screenshots and output some info I need


##install

```
#for me on windows 8.1, on ubuntu you can just install phantom first then standard npm install nightmare
npm install nightmare --python=C:\python27\python.exe --msvs_version=2013
npm install
sudo node src/appHost.js 
```
for resizing install imagemagick with apt-get, or download binaries for windows (google it)

```
sudo apt-get install imagemagick
```

##Better install
On linux, clone and run npm install (might have to install phantomjs first to get nightmare working)

**install forever**
```
npm install forever -g
```

edit the base starter.sh and set the path to wherever you cloned
(currently I have it cloned at ``/home/ubuntu/nm-screenshot/``)

add a crontab

```
crontab -e
```

append with

```
@reboot /home/ubuntu/nm-screenshot/starter.sh
```

this starts forever on system reboot so we're always up and running


#How this works/ what it does

Starts webserver with 2 endpoints, all this thing does is take screenshots of website, and returns a key to get the image at a later time, and returns the actual url of the image (incase of redirects or w/e..basically so we know what url we're looking at)

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


