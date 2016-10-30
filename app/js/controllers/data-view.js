'use strict';

angular.module('app').controller('DataCtrl', ['$scope','$state', 'issuesSrv', '$timeout',   function($scope, $state, issuesSrv, $timeout) {

    var vm = this;

    vm.query = {
      order: 'name',
      limit: 10,
      page: 1
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
