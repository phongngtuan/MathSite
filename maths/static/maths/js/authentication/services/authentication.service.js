(function() {
    'use strict';
    angular
        .module('maths.authentication.services')
        .factory('LoginService', ['$cookies', '$http', function($cookies, $http) {
           return {
                login: login
            };
            
            function login(username, password) {
                console.log(username);
                console.log(password);
                $http.post('/maths/api/auth/login/',
                           {
                               username: username,
                               password: password
                           });
            }
        }])
})();

