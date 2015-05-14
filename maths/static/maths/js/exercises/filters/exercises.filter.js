(function() {
    'use strict'
    angular
        .module('maths.exercises.filters')
        .filter('rawHtml', ['$sce', function($sce){
            return function(val){
                return $sce.trustAsHtml(val);
            };
        }])
        .filter('assignModel', function(){
            return function(val) {
                var index=0;
                return val.replace("<input>", function(){
                    return '<input ng-model="$parent.user_answers[question.id][answer.part]['+(index++)+']">';
                })
            };
        });
})()
