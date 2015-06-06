(function() {
    'use strict';
    angular
        .module('maths.utils')
        .controller('ConfirmDialogController', ['$scope', '$modalInstance',
                function($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close(true);
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }]);
})();

