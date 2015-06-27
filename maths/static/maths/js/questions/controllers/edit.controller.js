(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionEditController', ['$scope', '$stateParams', 'Question', 'Answer', 'Figure', 'FileUploader',
                function($scope, $stateParams, Question, Answer, Figure,  FileUploader) {
                    $scope.uploader = new FileUploader();
                    console.log($scope.uploader.method);
                    $scope.uploader.method = "POST";
                    $scope.uploader.url = "/maths/api/upload/";
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

                    $scope.upload = function(file) {
                        Figure.create({question: question_id}, function(response){
                            console.log(response);
                        });
                        console.log(file)
                    }

                    $scope.deleteAnswer = function(answer) {
                        var index = $scope.answers.indexOf(answer);
                        trash_answers.push(answer);
                        $scope.answers.splice(index, 1);
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

