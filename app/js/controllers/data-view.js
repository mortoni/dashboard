(function () {
'use strict';

angular.module('app').controller('DataCtrl', ['$scope','$state', '$timeout', 'issues',
  function($scope, $state, $timeout, issues) {

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
      vm.issues = issues.get();
    }

    vm.onPaginate = function(page, limit) {
      vm.promise = $timeout(function () {}, 2000);
    };

    vm.onReorder = function(order) {
      vm.promise = $timeout(function () {}, 2000);
    };

  }]);
})();
