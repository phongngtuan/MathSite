(function() {
    'use strict'
    angular
        .module('maths.answers.services')
        .factory('Answer', function($resource) {
            return $resource("/maths/api/topics/:id", {
                id: "@id"
            },
            {
                getByQuestion: {
                    method: 'GET',
                    url: '/maths/api/questions/',
                    params: {question: '@question'},
                    isArray: true
                },
                create: {
                    method:'POST',
                },
                update: {
                    method:'PUT',
                }
            },
            {
                stripTrailingSlashes: false
            })
        })
})();
