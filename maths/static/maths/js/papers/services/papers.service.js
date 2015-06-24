(function() {
    'use strict'
    angular
        .module('maths.papers.services')
        .factory('Paper', function($resource) {
            return $resource("/maths/api/papers/:id", {
                id: "@id"
            },
            {
                stripTrailingSlashes: false
            });
        })
})();
