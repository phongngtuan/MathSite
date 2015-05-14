(function() {
    'use strict'
    angular
        .module('maths.exercises.controllers')
        .controller('ExercisesDoController', ['$scope', '$stateParams', 'Questions', 'Topics', function($scope, $stateParams, Questions, Topics){
            var topic = $stateParams.topic;
            if(topic){
                Topics.retrieve(topic).then(function(response){
                    $scope.topic = response.data.title;
                });
                
                Questions.getByTopic(topic).then(function(response){
                    $scope.questions = response.data;
                    $scope.questions.forEach(function(element){
                        element.parts = element.content.split(";");
                        element.answers.forEach(function(element){
                            console.log(element.content);
                        });
                        element.answers = element.answers.filter(function(element){
                                return(element.content != "");
                            });
                        });
                    })
            }
        }]);
})()
