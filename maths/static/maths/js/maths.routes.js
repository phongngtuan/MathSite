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
            .state('topics.questions', {
                url: "/:topic/questions",
                templateUrl: "/static/maths/partials/questions.html",
                controller: "QuestionsViewController"
            })
            .state('exercise', {
                url: "/:level/exercise",
                templateUrl: "/static/maths/partials/exercises.html",
                controller: "TopicsViewController"
            })
            .state('exercise_do', {
                url: "/:topic/do",
                templateUrl: "/static/maths/partials/exercise_do.html",
                controller: "ExercisesDoController"
            })
            .state('manage_topics', {
                url: "/topics",
                templateUrl: "/static/maths/partials/manage_topics.html",
                controller: "TopicsManageController"
            })
            .state('manage_topics.edit', {
                url: "/edit/:topic",
                templateUrl: "/static/maths/partials/topic_edit.html",
                controller: "TopicEditController"
            })
            ;
        });
})()
