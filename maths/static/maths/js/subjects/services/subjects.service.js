(function() {
    'use strict'
    angular
        .module('maths.subjects.services')
        .factory('Subject', function($resource) {
            return $resource("/maths/api/subjects/:id", {
                id: "@id"
            });
        })
})()
