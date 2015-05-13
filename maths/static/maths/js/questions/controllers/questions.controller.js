(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsViewController', ['$scope', '$stateParams', 'Questions', 'Topics', function($scope, $stateParams, Questions, Topics){
            var topic = $stateParams.topic;

            Topics.retrieve(topic).then(function(response){
                $scope.topic = response.data.title;
            });
            
            Questions.getByTopic(topic).then(function(response){
                $scope.questions = response.data;
                $scope.questions.forEach(function(element){
                    element.parts = element.content.split(";");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                })
            });
        }]);
})()
