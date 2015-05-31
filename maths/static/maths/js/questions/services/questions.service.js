(function() {
    'use strict'
    angular
        .module('maths.questions.services')
        .factory('Question', function($resource) {
            return $resource("/maths/api/topics/:id", {
                id: "@id"
            },
            {
                getByTopic: {
                    method: 'GET',
                    url: '/maths/api/questions/',
                    params: {topic: '@topic'},
                    isArray: true
                }
            },
            {
                stripTrailingSlashes: false
            });
        })
})();
