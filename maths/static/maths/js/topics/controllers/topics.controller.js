(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicsViewController', ['$scope', '$stateParams', 'Topics', function($scope, $stateParams, Topics){
            $scope.level = $stateParams.level;
            if($scope.level)
                Topics.getByLevel({level: $scope.level}, function(response){
                    console.log(response);
                    $scope.topics = response;
                });
            else
                Topics.query(function(response){
                    $scope.topics = response;
                });
        }]);
})()
