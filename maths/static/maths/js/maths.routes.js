(function() {
    'use strict'
    angular
    .module('maths.routes')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/static/maths/partials/home.html",
            })
            .state('topics', {
                url: "/:level/topics",
                templateUrl: "/static/maths/partials/topics.html",
                controller: "TopicsViewController"
            })
            .state('questions', {
                url: "/:level/questions",
                templateUrl: "/static/maths/partials/questions.html",
                controller: "QuestionsViewController"
            });
    });
})()
