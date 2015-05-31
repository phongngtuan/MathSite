(function() {
    'use strict'
    angular
        .module('maths.subjects.services')
        .factory('Subjects', ['$http', function($http){
            var Subjects = {
                all: all,
                retrieve: retrieve,
            }
            return Subjects;
            
            function all() {
                return $http.get('/maths/api/subjects/');
            }
            function retrieve(id){
                return $http.get('/maths/api/subjects/'+id);
            }
        }]);
})();
