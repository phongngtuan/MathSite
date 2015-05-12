(function() {
    'use strict'
    angular
        .module('maths.topics.services')
        .factory('Topics', ['$http', function($http){
            var Topics = {
                all: all,
            }
            return Topics;
            
            function all() {
                return $http.get('/maths/api/topics/');
            }
        }]);
})();
