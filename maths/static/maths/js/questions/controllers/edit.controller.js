(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionEditController', ['$scope', '$stateParams', 'Question',
                function($scope, $stateParams, Question) {
                    var question_id = $stateParams.id
                    Question.get({id: question_id}, function(response) {
                        console.log("here");
                        $scope.question = response;
                    });
                    
                    $scope.addAnswer = function() {
                        console.log("added answer");
                        $scope.question.answers.push({});
                    };
                    $scope.updateAllAnswers = function() {
                        $scope.question.answers.forEach(function(answer){
                            console.log(answer.content);
                        });
                    };
                    $scope.deleteAnswer = function() {
                    }
                }]);
})()

