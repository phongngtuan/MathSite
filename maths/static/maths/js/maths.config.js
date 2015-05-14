(function() {
    'use strict'
    angular
        .module('maths.config')
        .config(['$locationProvider', function($locationProvider){
            //$locationProvider.html5Mode(true);
            //$locationProvider.hashPrefix('!');
        }])
        .config(['$httpProvider', function($httpProvider){
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        }]);
})();
