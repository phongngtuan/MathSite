(function() {
    'use strict'
    angular
        .module('maths.topics.controllers')
        .controller('TopicsManageController', ['$scope', 'Topics', 'Subjects', function($scope, Topics, Subjects){
            var res = Subjects.all()
            res.then(function(response){
                $scope.subjects = response.data;
            });
            Topics.query(function(response) {
                $scope.topics = response
            });
        }]);
})()