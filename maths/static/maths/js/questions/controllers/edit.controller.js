(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionEditController', ['$scope', '$stateParams', 'Question', 'Answer',
                function($scope, $stateParams, Question, Answer) {
                    var question_id = $stateParams.id
                    Question.get({id: question_id}, function(response) {
                        console.log("here");
                        $scope.question = response;
                    });
                    Answer.query({question_id:question_id}, function(response) {
                        console.log(response);
                        $scope.answers = response;
                    });
                    
                    $scope.addAnswer = function() {
                        console.log("added answer");
                        $scope.answers.push({});
                    };
                    $scope.updateAllAnswers = function() {
                        $scope.answers.forEach(function(answer){
                            console.log(answer.content);
                        });
                    };
                    $scope.deleteAnswer = function(answer) {
                        var index = $scope.answers.indexOf(answer);
                        $scope.answers.splice(index, 1);
                    }
                }]);
})()

