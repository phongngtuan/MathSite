(function() {
    'use strict'
    angular
        .module('maths.papers.controllers')
        .controller('PapersViewController', ['$scope', '$stateParams', 'Paper', 'Topic', function($scope, $stateParams, Paper, Topic){
            var topic = $stateParams.topic;
            if(topic){
                Topic.get({id: topic}, function(response){
                    $scope.topic = response;
                });
                Paper.getByTopic({topic: topic}, function(response){
                    $scope.papers = response;
                    $scope.papers.forEach(function(element){
                        element.parts = element.content.split(";");
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    })
                });
            }
        }]);
})()
