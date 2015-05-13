(function() {
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('ExercisesDoController', ['$scope', '$stateParams', '$sce', 'Questions', 'Topics', function($scope, $stateParams, $sce, Questions, Topics){
            var topic = $stateParams.topic;
            $scope.myContent= $sce.trustAsHtml("<input>");
            if(topic){
                Topics.retrieve(topic).then(function(response){
                    $scope.topic = response.data.title;
                });
                
                Questions.getByTopic(topic).then(function(response){
                    $scope.questions = response.data;
                    $scope.questions.forEach(function(element){
                        element.parts = element.content.split(";");
                        element.answers.forEach(function(answer){
                            console.log(answer);
                        })
                    })
                });
            }
        }]);
})()
