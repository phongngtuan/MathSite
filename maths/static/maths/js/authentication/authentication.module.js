(function() {
    'use strict';
    angular.module('maths.authentication', [
        'maths.authentication.controllers',
        'maths.authentication.services'
    ]);
    angular.module('maths.authentication.controllers', []);
    angular.module('maths.authentication.services', ['ngCookies']);
})();
