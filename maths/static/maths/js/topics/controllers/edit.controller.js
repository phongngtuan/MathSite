(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('TopicEditController', ['$scope', '$state', '$stateParams', 'Topic', '$modal', '$http',
                function($scope, $state, $stateParams, Topic, $modal, $http){
                    var topicId = $stateParams.topic;
                    $scope.x = topicId
                        if(topicId != 'new') {
                            Topic.get({id: topicId}, function(response){
                                $scope.topic = response;
                                console.log(response)
                            });
                        }
                        else {
                            $scope.topic = {title: '', subject:null}
                            console.log($scope.topic)
                        }
                    $scope.saveTopic = function(){
                        console.log("saved");
                        if(topicId == 'new') {
                            Topic.create($scope.topic)
                                .$promise.then(function(topic){
                                    $scope.$parent.topics.push(topic);
                                })
                        }
                        else {
                            Topic.update($scope.topic);
                        }
                    }
                    $scope.confirmDelete = function() {
                        var modalInstance = $modal.open({
                            animation: true,
                            templateUrl: '/static/maths/partials/confirmDialog.html',
                            controller: 'ConfirmDialogController',
                            size: 'sm'
                        });
                        modalInstance.result.then(function(result) {
                            $scope.confirm = result;
                            console.log($scope.$parent.topics);
                            if(result) {
                                console.log("Deleting");
                                Topic.delete({id: topicId});
                                $scope.$parent.topics = $scope.$parent.topics.filter(function(topic) {
                                    return (topic.id != topicId)
                                });
                                $state.go('manage.topics');
                            }
                        });
                    }
                }]);
})()
