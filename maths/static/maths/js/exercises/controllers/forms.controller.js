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
                var x = {}
                x.content = "1";
                x.id = "2";
                $http({
                    method   : 'POST',
                    url      : '/maths/api/checkAnswer/',
                    data     : x, 
                })
            }

        }]);
})()
