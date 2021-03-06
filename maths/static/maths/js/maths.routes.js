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
                    templateUrl: "/static/maths/partials/browse.html",
                    controller: "BrowseController"
                })
                .state('browse.topic', {
                    url: "/topic/:topic",
                    templateUrl: "/static/maths/partials/questions.html",
                    controller: "QuestionsViewController"
                })
                .state('browse.paper', {
                    url: "/paper/:paper",
                    templateUrl: "/static/maths/partials/questions.html",
                    controller: "QuestionsViewController"
                })
                .state('exercise', {
                    url: "/:level/exercise",
                    templateUrl: "/static/maths/partials/exercises_browse.html",
                    controller: "BrowseController"
                })
                .state('do_topic', {
                    url: "/topic/:topic",
                    templateUrl: "/static/maths/partials/exercise_do.html",
                    controller: "QuestionsViewController"
                })
                .state('do_paper', {
                    url: "/paper/:paper",
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
                .state('question', {
                    url: "/question/:id",
                    templateUrl: "/static/maths/partials/question_edit.html",
                    controller: "QuestionEditController"
                });
        });
})()
