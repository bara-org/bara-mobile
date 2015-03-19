angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FunController', function($scope) {
    $scope.pickTheFun = function() {
        var bara = new BARA();
        bara.applyListActive(".fun");
    };
})

.controller('RouteController', function($scope) {
    $scope.pickARoute = function() {
        var bara = new BARA();
        bara.applyListActive(".route");
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
