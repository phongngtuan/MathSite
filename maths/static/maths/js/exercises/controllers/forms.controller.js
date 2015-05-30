(function(){
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('FormController', ['$scope', '$http', function($scope, $http){
            $scope.formData = {};
            $scope.result = {};
            $scope.user_answers = {};
            $scope.checkAnswer = function(question_id){
                console.log("Checking!");
                console.log(question_id);
                console.log($scope.user_answers[question_id]);
                $http({
                    method   : 'POST',
                    url      : '/maths/api/checkAnswer/',
                    data     : $scope.user_answers[question_id],
                })
                .success(function(data, status, headers, config) {
                    console.log("success");
                    console.log(data);
                    $scope.result[question_id] = data;
                })
                .error(function(data, status, headers, config) {
                    console.log("error!");
                })
            }
            var selected_question, selected_answer, selected_index;

            $scope.latex_changed = function(){
                console.log("changed");
                var box = angular.element(document.getElementById("latex-box"));
                $scope.ascii_input = box.mathquill('latex');
                console.log($scope.ascii_input);
                if (!$scope.user_answers[selected_question]) {
                    $scope.user_answers[selected_question] = {};
                    console.log("defined "+selected_question);
                }
                if (!$scope.user_answers[selected_question][selected_answer]) {
                    $scope.user_answers[selected_question][selected_answer] = {};
                    console.log("defined "+selected_answer);
                }
                $scope.user_answers[selected_question][selected_answer][selected_index]=$scope.ascii_input;
            }
            $scope.selected = function(question, answer, index) {
                console.log(question, answer, index);
                selected_question = question;
                selected_answer = answer;
                selected_index = index;
                $scope.field
            }


        }]);
})()
