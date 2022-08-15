# ionic-angular-capacitor

# Introduction to Ionic
Ionic is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.

## Use the device camera to take a photo:
   https://capacitor.ionicframework.com/docs/apis/camera
## Store the photo data into permanent file storage:
 https://capacitor.ionicframework.com/docs/apis/filesystem
## Store a reference to all photo filepaths using preferences API:
 https://capacitorjs.com/docs/apis/preferences

# Environment Setup
To get started with Ionic Framework, the only requirement is a Node & npm environment.
Of course, a code editor Visual Studio Code is also required.
The version control system Git is highly recommended.

# Install the Ionic CLI with npm:
``` npm install -g @ionic/cli native-run cordova-res ```

# Building an Ionic Application

## 1. create an Application
``` ionic start ionic-angular-capacitor blank --type=angular --capacitor ```

 ## 2. Change into the app folder 
 ``` cd ionic-angular-capacitor ```

 ## 3. Install Capacitor Plugins
 ``` npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem ``` 

## 4. Add some PWA Element Library
Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic PWA Elements library.

``` npm install @ionic/pwa-elements ```

Next, import @ionic/pwa-elements by editing src/main.ts.
``` import { defineCustomElements } from '@ionic/pwa-elements/loader'; ```

``` defineCustomElements(window); ```

## 5. Run App Locally in a Web Browse 
``` ionic serve ```

## 6. iOS App Development
## 7. Xcode Setup
``` xcode-select --install ```

## 8. Configuring Command Line Tools for Android
Check how to set variable path for below:
ANDROID_SDK_ROOT, avdmanager, sdkmanager, adb, logcat, emulator

How to set JAVA_HOME, GRADLE_HOME & ANDROID_SDK_ROOT path in macOS [https://androidabcd.info/how-to-set-java_home-gradle_home-android_sdk_root-path-in-macos/]

How to set JAVA_HOME, GRADLE_HOME & ANDROID_SDK_ROOT path in Windows 11 [https://androidabcd.info/how-to-set-java_home-in-windows/]

## 8. Generate the native project 
``` ionic capacitor add ios ```
``` ionic capacitor add android ```

## 9. Set the Package ID.
For Capacitor, open the capacitor.config.json file and modify the appId property.

For Cordova, open the config.xml file and modify the id attribute of the root element, <widget>

## 10. Open the project in Xcode
``` ionic capacitor open ios ```

## 11. Develop the Ionic app and sync it to the native project.
``` ionic capacitor copy ios ```
``` ionic capacitor copy android ```

## 12. Live-reload with Capacitor
``` ionic capacitor run ios -l --external ```
``` ionic capacitor run android -l --host=YOUR_IP_ADDRESS ```
