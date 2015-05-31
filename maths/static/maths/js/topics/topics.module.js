(function() {
    'use strict'
    angular.module('maths.topics', [
                   'maths.topics.controllers',
                   'maths.topics.services',
                   ]);
    angular.module('maths.topics.services', ['ngResource']);
    angular.module('maths.topics.controllers', []);
})();
