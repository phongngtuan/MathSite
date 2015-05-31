(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicEditController', ['$scope', '$stateParams', 'Topics', function($scope, $stateParams, Topics){
            var topicId = $stateParams.topic;
            $scope.x = topicId
            if(topicId != 'new') {
                Topics.retrieve(topicId).then(function(response){
                    $scope.topic = response.data;
                    console.log(response.data)
                });
            }
            else {
                $scope.topic = {'title': ''}
                console.log($scope.topic)
            }
        }]);
})()
