(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionEditController', ['$scope', '$stateParams', 'Question', 'Answer', 'Figure', 'Upload', 
                function($scope, $stateParams, Question, Answer, Figure, Upload) {
                    var trash_answers = [];
                    var question_id = $stateParams.id
                    Question.get({id: question_id}, function(response) {
                        console.log("here");
                        $scope.question = response;
                    });
                    Answer.query({question:question_id}, function(response) {
                        console.log(response);
                        $scope.answers = response;
                    });
                    
                    $scope.addAnswer = function() {
                        console.log("added answer");
                        $scope.answers.push({});
                    };
                    $scope.updateAllAnswers = function() {
                        $scope.answers.forEach(function(answer){
                            saveAnswer(answer);
                        });
                        trash_answers.forEach(function(answer) {
                            Answer.remove(answer);
                        });
                    };

                    $scope.deleteAnswer = function(answer) {
                        var index = $scope.answers.indexOf(answer);
                        trash_answers.push(answer);
                        $scope.answers.splice(index, 1);
                    }

                    $scope.upload = function(files) {
                        console.log("Uploading "+files[0]);
                        var file = files[0];
                        Upload.upload({
                            method: 'POST',
                            url: '/maths/api/figures/',
                            fields: {'question': question_id},
                            file: file,
                            fileFormDataName: 'image'
                        }).success(function(data, status, headers, config) {
                            console.log(data);
                        });
                    }

                    function saveAnswer(answer) {
                        console.log("deleted answer:");
                        console.log(trash_answers);
                        console.log(answer);
                        if (answer.id) {
                            Answer.update(answer); 
                        }
                        else {
                            console.log("Add new question");
                            answer.question = question_id;
                            Answer.save({question: question_id}, answer);
                        }
                    }

                }]);
})()

