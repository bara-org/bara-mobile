// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "templates/home.html"
            }
        }
    })

    .state('app.pickaroute', {
        url: "/pick-a-route",
        views: {
            'menuContent': {
                templateUrl: "templates/pick-a-route.html"
            }
        }
    })

    .state('app.routecampus3', {
        url: "/route-campus-3",
        views: {
            'menuContent': {
                templateUrl: "templates/route-campus-3.html"
            }
        }
    })

    .state('app.routecampus4', {
        url: "/route-campus-4",
        views: {
            'menuContent': {
                templateUrl: "templates/route-campus-4.html"
            }
        }
    })

    .state('app.routecampus5', {
        url: "/route-campus-5",
        views: {
            'menuContent': {
                templateUrl: "templates/route-campus-5.html"
            }
        }
    })

    .state('app.whereisthefun', {
        url: "/where-is-the-fun",
        views: {
            'menuContent': {
                templateUrl: "templates/where-is-the-fun.html"
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
