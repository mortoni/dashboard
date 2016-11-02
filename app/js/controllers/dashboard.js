(function () {
'use strict';

angular.module('app').controller('DashboardCtrl', ['$scope',
  function($scope) {

    var vm = this;

    vm.map_options = {
      source: 'api/dashboard-map.json',
      height: 503,
      sidebar: false,
      minimap: false,
      locations: true,
      deeplinking: true,
      fullscreen: false,
      developer: false,
      maxscale: 3,
      hovertip: true,
      animate: true
    };

  }]);
})();
