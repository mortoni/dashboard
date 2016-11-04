(function () {
'use strict';

angular.module('app').controller('DashboardCtrl', ['$scope', 'locations', '$interval',
  function($scope, locations, $interval) {

    var vm = this;
    vm.marker = [];
    vm.flag = true;

    $scope.$on('$destroy', function() {
      $interval.cancel(vm.timeout);
    });

    activate();

    function activate(){

      vm.locations = locations.get();

      vm.map = L.map('mapid').setView([0, 0], 2);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          maxZoom: 5,
          id: 'mortoni.2160gf6f',
          accessToken: 'pk.eyJ1IjoibW9ydG9uaSIsImEiOiJjaXYzOXE0bXYwMWM2Mm90YmV3aGJoYWtvIn0.oVEPUNVTai26CGUQPUIJLQ'
      }).addTo(vm.map);

      vm.timeout = $interval(function () {
        if(vm.flag)
          init(vm.map);
        update();
      },5000);
    }

    function init(map) {
      vm.flag = false;
      for (var i = 0; i < 5; i++) {
        var local = vm.locations[Math.floor(Math.random() * vm.locations.length)];
        local.title = Math.floor((Math.random() * 1000) + 1) + ' Employees';

        vm.marker[i] = L.marker([local.lat, local.long]).addTo(map);
        vm.marker[i].bindPopup(local.title);
      }
    }

    function update(){
      for (var i = 0; i < 5; i++) {
        var local = vm.locations[Math.floor(Math.random() * vm.locations.length)];
        local.title = Math.floor((Math.random() * 1000) + 1) + ' Employees';

        vm.marker[i].setLatLng(new L.LatLng(local.lat, local.long));
        vm.marker[i].bindPopup(local.title);
      }
    }

  }]);
})();
