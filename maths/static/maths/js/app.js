(function() {
    'use strict'
    var myApp = angular.module('myApp', ['ui.router']);

    myApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1");

        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "/static/maths/partials/state1.html",
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "/static/maths/partials/state1.list.html",
                controller: function($scope) {
                    $scope.items = ["A", "list", "of", "items"];
                }
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "/static/maths/partials/state2.html",
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "/static/maths/partials/state2.list.html",
                controller: function($scope) {
                    $scope.things = ["A", "set", "of", "things"];
                }
            })
    });
})()
