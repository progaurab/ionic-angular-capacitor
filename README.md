# Ionic Angular - Build Android iOS PWA with Ionic Framework 6
This is the repository for the course "Ionic Angular - Build Android iOS PWA with Ionic Framework 6" available on Instill Learning and Udemy. The full course is available from 
* [Udemy]()
* [Instill Learning](https://www.instilllearning.com)

![Ionic Angular](https://img-c.udemycdn.com/course/750x422/4823198_ec54_2.jpg)
# Introduction to Ionic
Ionic is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.

# Learning Objectives
* Quick start with Ionic Framework 6
* Quick start with Angular 14
* Quick start with Ionic Capacitor
* Build Android & iOS Mobile App
* Build Progressive Web App (PWA)
* To publish the app on Google Play Store & App Store

# Software - version[ Last Updated on 15 Aug 2022]:
* Node - v16.14.0
* npm - 8.15.0 
* JDK - openjdk version "11.0.14.1"
* Ionic CLI - 6.20.1
* Capacitor -  4.0.1
* Angular - 14.0.0

## Capacitor Plugin Used
* [Use the device camera to take a photo] (https://capacitor.ionicframework.com/docs/apis/camera)
* [Store the photo data into permanent file storage] (https://capacitor.ionicframework.com/docs/apis/filesystem)
* [Store a reference to all photo filepaths using preferences API] (https://capacitorjs.com/docs/apis/preferences)

# Environment Setup
To get started with Ionic Framework, the only requirement is a Node & npm environment.
Of course, a code editor Visual Studio Code is also required.
The version control system Git is highly recommended.

# Instructions
This repository has multiple branch containing all examples. You can clone the repository and go to individual example's root folder and run it. 
To run branch photo-gallary-angular-cap, use below command:
```
$ git clone https://github.com/progaurab/ionic-angular-capacitor.git
$ cd ionic-angular-capacitor
$ git checkout photo-gallary-angular-cap
$ code .
```
# Other usefull commands
## Install the Ionic CLI with npm:
``` npm install -g @ionic/cli native-run cordova-res ```

## Building an Ionic Application

### 1. create an Application
``` $ ionic start ionic-angular-capacitor blank --type=angular --capacitor 
```

 ### 2. Change into the app folder 
 ``` $ cd ionic-angular-capacitor 
 ```

 ### 3. Install Capacitor Plugins
 ``` $ npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem 
 ``` 

### 4. Add some PWA Element Library
Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic PWA Elements library.

``` $ npm install @ionic/pwa-elements 
```

Next, import @ionic/pwa-elements by editing src/main.ts.
``` import { defineCustomElements } from '@ionic/pwa-elements/loader';

    defineCustomElements(window); 
```

### 5. Run App Locally in a Web Browse 
``` $ ionic serve 
```

## iOS App Development
### 6. Xcode Setup
``` $ xcode-select --install 
```

### 7. Configuring Command Line Tools for Android
Check how to set variable path for below:
ANDROID_SDK_ROOT, avdmanager, sdkmanager, adb, logcat, emulator

* [How to set JAVA_HOME, GRADLE_HOME & ANDROID_SDK_ROOT path in macOS](https://androidabcd.info/how-to-set-java_home-gradle_home-android_sdk_root-path-in-macos/)

* [How to set JAVA_HOME, GRADLE_HOME & ANDROID_SDK_ROOT path in Windows 11](https://androidabcd.info/how-to-set-java_home-in-windows/)

### 8. Generate the native project 
``` $ ionic capacitor add ios
    $ ionic capacitor add android 
```

### 9. Set the Package ID.
For Capacitor, open the capacitor.config.json file and modify the appId property.

For Cordova, open the config.xml file and modify the id attribute of the root element, <widget>

### 10. Open the project in Xcode
``` $ ionic capacitor open ios 
```

### 11. Develop the Ionic app and sync it to the native project.
``` $ ionic capacitor copy ios 
    $ ionic capacitor copy android 
```

### 12. Live-reload with Capacitor
``` $ ionic capacitor run ios -l --external
    $ ionic capacitor run android -l --host=YOUR_IP_ADDRESS 
```

# Instructor
[Gaurab Kumar](https://www.linkedin.com/in/progaurab)