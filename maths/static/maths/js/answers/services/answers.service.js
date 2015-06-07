(function() {
    'use strict'
    angular
        .module('maths.answers.services')
        .factory('Answer', function($resource) {
            return $resource("/maths/api/questions/:question_id/answers/:part", {
                question_id: "@question",
                part_no: "@part_no"
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
            })
        })
})();
