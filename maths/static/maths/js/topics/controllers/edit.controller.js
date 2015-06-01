(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('TopicEditController', ['$scope', '$stateParams', 'Topic', function($scope, $stateParams, Topic){
            var topicId = $stateParams.topic;
            $scope.x = topicId
            if(topicId != 'new') {
                Topic.get({id: topicId}, function(response){
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
