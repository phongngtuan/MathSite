(function() {
    'use strict'
    angular
        .module('maths.topics.services')
        .factory('Topics', ['$http', function($http){
            var Topics = {
                all: all,
                getByLevel: getByLevel,
                retrieve: retrieve,
            }
            return Topics;
            
            function all() {
                return $http.get('/maths/api/topics/');
            }
            function getByLevel(level){
                return $http.get('/maths/api/topics/', {
                    params: {level: level}
                });
            }
            function retrieve(id){
                return $http.get('/maths/api/topics/'+id);
            }
        }]);
})();
