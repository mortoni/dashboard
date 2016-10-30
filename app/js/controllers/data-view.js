'use strict';

/* Controllers */

angular.module('app').controller('DataCtrl', ['$scope','$state', 'issuesSrv', function($scope, $state, issuesSrv) {
      var vm = this;

      vm.issues = issuesSrv.get();
      $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

      if(typeof vm.issues.length === 'undefined')
        $state.go('app.dashboard');


}]);
