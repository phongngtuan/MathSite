(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsViewController', ['$scope', '$stateParams', 'Questions', function($scope, $stateParams, Questions){
            $scope.topic = $stateParams.level;
            
            Questions.all().then(function(response){
                $scope.questions = response.data;
            });
        }]);
})()
