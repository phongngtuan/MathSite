(function() {
    'use strict'
    angular
        .module('maths.questions.services')
        .factory('Question', function($resource) {
            return $resource("/maths/api/questions/:id", {
                id: "@id"
            },
            {
                getByTopic: {
                    method: 'GET',
                    url: '/maths/api/questions/',
                    params: {topic: '@topic'},
                    isArray: true
                },
                getByPaper: {
                    method: 'GET',
                    url: '/maths/api/questions/',
                    params: {paper: '@paper'},
                    isArray: true
                }
            },
            {
                stripTrailingSlashes: false
            });
        })
})();
