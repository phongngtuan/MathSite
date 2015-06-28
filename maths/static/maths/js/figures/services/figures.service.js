(function(){
    'use strict'
    angular
        .module('maths.figures.services')
        .factory('Figure', function($resource){
            return $resource("/maths/api/figures/:id", {
                id: "@id"
            },
            {
                create: {
                    method:'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                },
            },
            {
                stripTrailingSlashes: false
            });
        });
})()
