(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsViewController', ['$scope', '$stateParams', 'Question', 'Topic', function($scope, $stateParams, Question, Topic){
            var topic = $stateParams.topic;
            if(topic){
                Topic.get({id: topic}, function(response){
                    $scope.topic = response;
                });
                Question.getByTopic({topic: topic}, function(response){
                    $scope.questions = response;
                    $scope.questions.forEach(function(element){
                        element.parts = element.content.split(";");
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    })
                });
            }
        }]);
})()
