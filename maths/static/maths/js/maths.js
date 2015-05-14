(function() {
    'use strict'
    var myApp = angular.module('maths', [
                               'maths.routes',
                               'maths.config',
                               'maths.topics',
                               'maths.questions',
                               'maths.exercises',
                              ]);

    angular
        .module('maths.routes', ['ui.router']);
    angular
        .module('maths.config', []);
    angular
        .module('maths')
        .run(['$http', function($http) {
            $http.defaults.xsrfHeaderName = 'X-CSRFToken';
            $http.defaults.xsrfCookieName = 'csrftoken';
        }]);
})()
