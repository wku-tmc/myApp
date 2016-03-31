# myApp
Phonegap app that has two pages. 

First page has a button that will prompt the user to select one action. <br>
The second page has a button that will show the device'e network connection.

It make uses of Jquery Mobile (JQM) for its UI and the following plugins:
- [Dialogs (notification)](https://github.com/apache/cordova-plugin-dialogs)
- [Network Information](https://github.com/apache/cordova-plugin-network-information)
- [Vibration](https://github.com/apache/cordova-plugin-vibration)

<hr>
# Creating a phonegap project with JQuery Mobile and plugins

1. Start Command Prompt (CMD) 
2. goto your directory (eg at your deskstop)
3. create a phonegap project
   phonegap create myApp --id "sg.edu.tmc.comp1661.app" --name "My App"
4. cd myApp
5. Import the plugins
   phonegap plugin add cordova-plugin-dialogs
   phonegap plugin add cordova-plugin-network-information
   phonegap plugin add cordova-plugin-vibration   
6. generate android port
   phonegap platform add android
7. copy and paste the jquery.mobile-1.4.5.min.css into the css folder
8. copy and paste jquery.mobile-1.4.5.min.js and jquery-1.11.1.min.js into the js folder
9. edit index.html
