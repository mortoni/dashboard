(function () {
'use strict';

angular.module('app').controller('DashboardCtrl', ['$scope', '$interval', '$http',
  function($scope, $interval, $http) {

    var vm = this;
    vm.refresh = false;

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

    $scope.$on('$destroy', function() {
      $interval.cancel(vm.timeout);
    });

    activate();

    function activate(){
      // vm.timeout = $interval(function () {
      //   vm.refresh = !vm.refresh;
      // }, 5000);
    }



  }]);
})();
