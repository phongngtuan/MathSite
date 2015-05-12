(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicsViewController', ['$scope', '$stateParams', 'Topics', function($scope, $stateParams, Topics){
            $scope.level = $stateParams.level;
            Topics.all().then(function(response){
                $scope.topics = response.data;
            });
        }]);
})()
