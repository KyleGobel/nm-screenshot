nm-screenshot
=============

small utility used by diff program to take screenshots and output some info I need


install nightmare on win 8 (for me)

```
npm install nightmare --python=C:\python27\python.exe --msvs_version=2013
```

then run

```
node screenshotter.js http://play.google.com

#output should be something like
> { "filename" : "54a8e98e.png", "url" : "https://play.google.com/store" }
```
