(function () {
'use strict';

angular.module('app').controller('DataCtrl', ['$scope','$state', '$timeout', 'issuesSrv',
  function($scope, $state, $timeout, issuesSrv) {

    var vm = this;

    vm.issues = [];
    vm.query = {
      order: 'name',
      limit: 10,
      page: 1
    };

    vm.filter = {
      show: false
    };

    acitave();

    function acitave(){
      vm.issues = issuesSrv.get();
    }

    vm.onPaginate = function(page, limit) {
      vm.promise = $timeout(function () {}, 2000);
    };

    vm.onReorder = function(order) {
      vm.promise = $timeout(function () {}, 2000);
    };

  }]);
})();
