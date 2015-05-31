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
            .state('browse', {
                url: "/:level/browse",
                templateUrl: "/static/maths/partials/topics.html",
                controller: "TopicsViewController"
            })
            .state('browse.questions', {
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
            .state('manage', {
                url: "/manage",
                templateUrl: "/static/maths/partials/manage.html"
            })
            .state('manage.topics', {
                url: "/topics",
                templateUrl: "/static/maths/partials/manage_topics.html",
                controller: "TopicsManageController"
            })
            .state('manage.topics.edit', {
                url: "/edit/:topic",
                templateUrl: "/static/maths/partials/topic_edit.html",
                controller: "TopicEditController"
            })
            .state('manage.questions', {
                url: "/questions",
                templateUrl: "/static/maths/partials/manage_questions.html",
                controller: "QuestionsManageController"
            })
            ;
        });
})()
