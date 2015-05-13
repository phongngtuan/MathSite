(function() {
    'use strict'
    angular
        .module('maths.answers.services')
        .factory('Answers', ['$http', function($http){
            var Answers = {
                all: all,
                retrieve: retrieve,
            }
            return Answers;
            
            function all() {
                return $http.get('/maths/api/answers/', {
                    params: {question: question}
                });
            }
            function retrieve(id){
                return $http.get('/maths/api/answers/'+id);
            }
        }]);
})();
