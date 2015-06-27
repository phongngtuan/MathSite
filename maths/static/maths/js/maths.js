(function() {
    'use strict'
    var myApp = angular.module('maths', [
                               'maths.routes',
                               'maths.config',
                               'maths.authentication',
                               'maths.topics',
                               'maths.figures',
                               'maths.papers',
                               'maths.questions',
                               'maths.exercises',
                               'maths.subjects',
                               'maths.answers',
                               'maths.utils'
                              ]);

    angular
        .module('maths.routes', ['ui.router']);
    angular
        .module('maths.config', []);
    angular
        .module('maths')
        .run(['$http', function($http) {
            $http.defaults.xsrfCookieName = 'csrftoken';
            $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        }]);
})()
