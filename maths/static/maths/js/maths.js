(function() {
    'use strict'
    var myApp = angular.module('maths', [
                               'maths.routes',
                               'maths.config',
                               'maths.questions',
                              ]);

    angular
        .module('maths.routes', ['ui.router']);
    angular
        .module('maths.config', []);
    angular
        .module('maths')
        .run(run);
    
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    };
})()
