(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionEditController', ['$scope', '$stateParams', 'Question',
                function($scope, $stateParams, Question) {
                    var question_id = $stateParams.id
                    Question.get({id: question_id}, function(response) {
                        $scope.question = response;
                    });
                }]);
})()

