(function() {
    'use strict';
    angular
        .module('maths.authentication.controllers')
        .controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {
            $scope.login = function(){
                LoginService.login("user", "passwd");
            }
        }]);
})();

