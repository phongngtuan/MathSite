(function() {
    'use strict'
    angular
        .module('maths.questions.services')
        .factory('Questions', ['$http', function($http){
            var Questions = {
                all: all,
            }
            return Questions;
            
            function all() {
                return $http.get('/maths/api/questions/');
            }
        }]);
})();
