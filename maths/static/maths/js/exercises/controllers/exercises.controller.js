(function() {
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('ExercisesDoController', ['$scope', '$stateParams', 'Question', 'Topic', function($scope, $stateParams, Question, Topic){
            var topic = $stateParams.topic;
            var paper = $stateParams.paper;
            if(topic){
                Topic.get({id:topic}, function(response) {
                    $scope.topic = response;
                });
                Question.getByTopic({topic:topic}, function(response){
                    $scope.questions = response;
                    $scope.questions.forEach(function(element){
                        element.parts = element.content.split(";");
                        element.answers.forEach(function(element){
                            console.log(element.content);
                        });
                        element.answers = element.answers.filter(function(element){
                            return(element.content != "");
                        });
                    });
                    console.log("Queued")
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                });
            }
            else if (paper){
                Question.getByPaper({paper: paper}, function(response){
                    $scope.questions = response;
                    $scope.questions.forEach(function(element){
                        element.parts = element.content.split(";");
                        element.answers.forEach(function(element){
                            console.log(element.content);
                        });
                        element.answers = element.answers.filter(function(element){
                            return(element.content != "");
                        });
                    });
                    console.log("Queued")
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                });
            }
        }]);
})()
