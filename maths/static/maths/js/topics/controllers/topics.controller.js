(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicsViewController', ['$scope', '$stateParams', 'Topics', function($scope, $stateParams, Topics){
            $scope.level = $stateParams.level;
            if($scope.level)
                var res = Topics.getByLevel($scope.level); 
            else
                var res = Topics.all()
            res.then(function(response){
                $scope.topics = response.data;
            });
        }]);
})()
