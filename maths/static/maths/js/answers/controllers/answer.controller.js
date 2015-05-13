(function() {
    'use strict'
    angular
        .module('maths.answers.controllers')
        .controller('AnswersViewController', ['$scope', '$stateParams', 'Answer', function($scope, $stateParams, Answer){
            $scope.question = $stateParams.question;
            if($scope.question)
                 Answer.all($scope.question).then(function(response){
                    $scope.answers = response.data;
                 });
        }]);
})()
