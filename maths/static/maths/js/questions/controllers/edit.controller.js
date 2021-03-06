(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionEditController', ['$scope', '$state', '$stateParams', '$modal', 'Question', 'Answer', 'Figure', 'Upload', 
                function($scope, $route, $stateParams, $modal, Question, Answer, Figure, Upload) {
                    var trash_answers = [];
                    var trash_figures = [];
                    var question_id = $stateParams.id
                    Question.get({id: question_id}, function(response) {
                        console.log("here");
                        $scope.question = response;
                    });
                    Answer.query({question:question_id}, function(response) {
                        console.log(response);
                        $scope.answers = response;
                    });
                    
                    function alert(template){
                        console.log("here")
                        $modal.open({
                            animation: true,
                            templateUrl: template ,
                            size: 'sm'
                        });
                    };

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
                        trash_figures.forEach(function(figure) {
                            Figure.remove(figure);
                        });
                        alert('questionSavedAlert.html')
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
                            $route.reload();
                        });
                    }

                    $scope.deleteFigure = function(figure){
                        trash_figures.push(figure);
                        $scope.question.figures = $scope.question.figures.filter(function(item){
                            return item.id != figure.id
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

