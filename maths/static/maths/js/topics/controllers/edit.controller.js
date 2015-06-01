(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('TopicEditController', ['$scope', '$stateParams', 'Topic', '$modal',
                function($scope, $stateParams, Topic, $modal){
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
                    $scope.saveTopic = function(){
                        console.log("saved");
                        Topic.update($scope.topic);
                    }
                    $scope.confirmDelete = function() {
                        var modalInstance = $modal.open({
                            animation: true,
                            templateUrl: '/static/maths/partials/confirmDialog.html',
                            controller: 'ConfirmDialogController',
                            size: 'sm'
                        })
                    }
                }]);
})()
