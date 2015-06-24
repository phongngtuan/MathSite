(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicsViewController', ['$scope', '$stateParams', 'Topic', 'Paper', function($scope, $stateParams, Topic, Paper){
            $scope.level = $stateParams.level;
            if($scope.level)
                Topic.getByLevel({level: $scope.level}, function(response){
                    console.log(response);
                    $scope.topics = response;
                });
            else
                Topic.query(function(response){
                    $scope.topics = response;
                });
            Paper.query(function(response) {
                $scope.papers = response;
            });
        }]);
})()
