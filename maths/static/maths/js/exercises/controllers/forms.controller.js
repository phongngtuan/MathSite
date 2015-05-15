(function(){
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('FormController', ['$scope', '$http', function($scope, $http){
            $scope.formData = {};
            $scope.checkAnswer = function(question_id){
                console.log("Checking!");
                console.log(question_id);
                console.log($scope.user_answers[question_id]);
                $http({
                    method   : 'POST',
                    url      : '/maths/api/checkAnswer/',
                    data     : $scope.user_answers[question_id],
                })
            }

        }]);
})()
