(function(){
    'use strict'
    angular
        .module('maths.topics.services')
        .factory('Topic', function($resource){
            return $resource("/maths/api/topics/:id/", {
                id: "@id"
            },
            {
                getByLevel :{
                    method:'GET',
                    url: "/maths/api/topics/",
                    params: {level: '@level'},
                    isArray: true
                }
            },
            {
                stripTrailingSlashes: false
            });
        });
})()
