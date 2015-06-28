(function() {
    'use strict'
    angular.module('maths.questions', [
                   'maths.questions.controllers',
                   'maths.questions.services',
                   ]);
    angular.module('maths.questions.services', ['ngResource']);
    angular.module('maths.questions.controllers', ['ngFileUpload']);
})();
