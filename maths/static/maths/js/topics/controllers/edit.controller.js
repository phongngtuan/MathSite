(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicEditController', ['$scope', '$stateParams', 'Topics', function($scope, $stateParams, Topics){
            var topicId = $stateParams.topic;
            $scope.x = topicId
            if(topicId != 'new') {
                Topics.get({id: topicId}, function(response){
                    $scope.topic = response;
                    console.log(response)
                });
            }
            else {
                $scope.topic = {'title': ''}
                console.log($scope.topic)
            }
        }]);
})()
