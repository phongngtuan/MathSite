(function(){
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('FormController', ['$scope', '$http', function($scope, $http){
            $scope.formData = {};
            $scope.result = {};
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

        }]);
})()
