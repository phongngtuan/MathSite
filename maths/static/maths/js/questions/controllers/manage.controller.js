(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsManageController', ['$scope', 'Topic', 'Subject', 'Question', 
                function($scope, Topic, Subject, Question) {
                    Subject.query(function(response) {
                        $scope.subjects = response;
                    });
                    Topic.query(function(response) {
                        $scope.topics = response;
                    });
                    $scope.topicChanged = function() {
                        getQuestionWithTopic($scope.search.topic.id);
                        MathJax.Hub.Queue(["Reprocess", MathJax.Hub]);
                        console.log("queued");
                    }
                    function getQuestionWithTopic(topic) {
                        Question.getByTopic({topic: topic}, function(response) {
                            $scope.questions = response; 
                            console.log(response);
                        });
                    }
                }
        ]);
})();