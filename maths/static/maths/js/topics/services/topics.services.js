(function() {
    'use strict'
    angular
        .module('maths.topics.services')
        .factory('Topics', ['$http', function($http){
            var Topics = {
                all: all,
                getLevel: getLevel,
            }
            return Topics;
            
            function all() {
                return $http.get('/maths/api/topics/');
            }
            function getLevel(level){
                return $http.get('/maths/api/topics/', {
                    params: {level: level}
                });
            }
        }]);
})();
