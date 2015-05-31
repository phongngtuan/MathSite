(function(){
    'use strict'
    angular
        .module('maths.topics.services')
        .factory('Topics', function($resource){
            return $resource("/maths/api/topics/:id", {
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
