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
                    url      : '/api/checkAnswer',
                    data     : $.param($scope.user_answers[questiond_id]),
                    headers  : {'Content-Type': 'application/x-www-form-urlencode' }
                });
            }

        }]);
})()
