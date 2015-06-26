(function() {
    'use strict'
    angular
        .module('maths.papers.controllers')
        .controller('PaperViewController', ['$scope', '$stateParams', 'Paper', 'Question', function($scope, $stateParams, Paper, Question){
            var paper = $stateParams.paper;
            if(paper){
                Paper.get({id: paper}, function(response){
                    $scope.paper = response;
                });
                Question.getByPaper({paper: paper}, function(response){
                    console.log("Here");
                    $scope.questions = response;
                    $scope.questions.forEach(function(element){
                        element.parts = element.content.split(";");
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    })
                });
            }
        }]);
})()
