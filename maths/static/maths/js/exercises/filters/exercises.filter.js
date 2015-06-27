(function() {
    'use strict'
    angular
        .module('maths.exercises.filters')
        .filter('rawHtml', ['$sce', function($sce){
            return function(val){
                return x; 
            };
        }])
        .filter('assignModel', function(){
            return function(val) {
                var index=0;
                return val.replace(/<input>/gi, function(){
                    var x= '<input '
                        + 'ng-model="$parent.user_answers[question.id][answer.id]['+(index)+']" '
                        + 'ng-click="$parent.selected(question.id, answer.id, '+ (index++) + ')"> ';
                    return x
                },
                'gi')
            };
        });
})()
