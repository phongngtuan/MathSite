(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsViewController', ['$scope', '$stateParams', 'Questions', 'Topics', function($scope, $stateParams, Questions, Topics){
            var topic = $stateParams.topic;

            Topics.retrieve(topic).then(function(response){
                $scope.topic = response.data.title;
            });
            
            Questions.all().then(function(response){
                $scope.questions = response.data;
                $scope.questions.forEach(function(current, index, arr){
                    current.parts = current.content.split(";");
                });
            });
        }]);
})()
