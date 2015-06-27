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
                },
            },
            {
                stripTrailingSlashes: false
            });
        });
})()
