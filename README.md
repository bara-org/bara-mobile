BARA Mobile
===========
This is the unofficial Bloomington Area Runners Association mobile application. It's primary purpose is to provide an easy way to read BARA announcements, pick routes, choose the Thursday "fun", and more.

bara-mobile is built using the [Ionic framework](http://ionicframework.com/).

Building bara-mobile
====================
You will need to install `cordova` and `ionic` command line tools. One may do this with `npm`. You must install Node.js first. Then install `cordova` and `ionic`.

    npm install -g cordova ionic

First clone bara-mobile.

    git clone https://github.com/bara-org/bara-mobile.git

To build bara-mobile for iOS devices you must be developing on a Mac.

    cd bara-mobile
    ionic platform add ios
    ionic build ios
    ionic emulate ios

If you would like to run the application on your device you can download the Ionic View app.

Once you have an account you can go into bara-mobile and upload your build.

    cd bara-mobile
    ionic upload

From the Ionic View app you can add the app with the ID provided from the `ionic upload` command.

You can email your app to friends as well.

    cd bara-mobile
    ionic share foobar@example.com

Developing bara-mobile
======================
Ionic is powered by Angular.js. See `www/js/app.js` and `www/js/controllers.js` for routes and controllers. All templates are in the `www/templates` directory.

See the [CSS component](http://ionicframework.com/docs/components/) docs for various controls such as: headers, footers, buttons, lists, forms, toggles, and the like.

For interactivity see the [JavaScript API](http://ionicframework.com/docs/api/). This includes: modals, navigation, gestures, tabs, spinners, and much more.
