(function() {
    'use strict'
    angular
        .module('maths.answers.services')
        .factory('Answer', function($resource) {
            return $resource("/maths/api/questions/:question/answers/:id/", {
                question: "@question",
                id: "@id"
            },
            {
                create: {
                    method:'POST',
                },
                update: {
                    method:'PUT',
                }
            },
            {
                stripTrailingSlashes: false
            });
        })
})();
