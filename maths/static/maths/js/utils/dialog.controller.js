(function() {
    'use strict';
    angular
        .module('maths.utils')
        .controller('ConfirmDialogController', ['$scope', '$modalInstance',
                function($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.dismiss('cancel');
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }]);
})();

