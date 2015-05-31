(function() {
    'use strict';
    angular
        .module('maths.questions.controllers')
        .controller('QuestionsManageController', ['$scope', 'Topic', 'Subject',
                function($scope, Topic, Subject) {
                    Subject.query(function(response) {
                        $scope.subjects = response;
                    });
                    Topic.query(function(response) {
                        $scope.topics = response;
                    });
                }
        ]);
})();
