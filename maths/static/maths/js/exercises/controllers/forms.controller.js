(function(){
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('FormController', ['$scope', '$http', function($scope, $http){
            $scope.formData = {};
            $scope.checkAnswer = function(){
                console.log("Checking!");
            }

        }]);
})()
