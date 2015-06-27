(function() {
    'use strict'
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsViewController', ['$scope', '$stateParams', 'Question', 'Topic', function($scope, $stateParams, Question, Topic){
            var topic = $stateParams.topic;
            var paper = $stateParams.paper;
            function replaceImgLink(question) {
                var index=0;
                console.log(question);
                var content = question.content;
                if(question.figures.length){
                    console.log("doing")
                    var content=content.replace("img;", function(){
                        return '<p><img ng-src="'+
                            question.figures[index++].path +
                            '"/></p>'
                    })
                }
                return content
            }
            if(topic){
                Topic.get({id: topic}, function(response){
                    $scope.topic = response;
                });
                Question.getByTopic({topic: topic}, function(response){
                    $scope.questions = response;
                    $scope.questions.forEach(function(element){
                        element.parts = replaceImgLink(element).split(";");
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    });
                });
            }
            if(paper){
                Question.getByPaper({paper: paper}, function(response){
                    $scope.questions = response;
                    $scope.questions.forEach(function(element){
                        element.parts = replaceImgLink(element).split(";");
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    });
                });
            }


        }]);
})()
