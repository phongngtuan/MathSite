(function() {
    'use strict'
    angular
        .module('maths.questions.services')
        .factory('Questions', ['$http', function($http){
            var Questions = {
                all: all,
                getByTopic: getByTopic,
            }
            return Questions;
            
            function all() {
                return $http.get('/maths/api/questions/');
            }
            function getByTopic(topic) {
                return $http.get('/maths/api/questions/', {
                    params: {topic: topic}
                });
            }

        }]);
})();
