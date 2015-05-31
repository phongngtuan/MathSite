(function() {
    'use strict'
    angular
        .module('maths.levels.services')
        .factory('Topics', ['$http', function($http){
            var Topics = {
                all: all,
                retrieve: retrieve,
            }
            return Topics;
            
            function all() {
                return $http.get('/maths/api/levels/');
            }
            function retrieve(id){
                return $http.get('/maths/api/levels/'+id);
            }
        }]);
})();
