#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
        export PATH=/usr/local/bin:$PATH
        sudo forever start --sourceDir /home/ubuntu/nm-screenshot src/appHost.js >> /home/ubuntu/nm-screenshot.log 2>&1
fi