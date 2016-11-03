(function () {
'use strict';

angular.module('app').controller('MetricsCtrl', ['$scope', '$http', '$interval',
  function($scope, $http, $interval) {

    var vm = this;

    vm.labels = [];
    vm.data = [];
    vm.data[0] = [];
    vm.test = 0;

    vm.series = ['Reported Issues'];
    vm.datasetOverride = [{
      label: "paying customers",
      borderWidth: 3,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      type: 'line'
    }];

    $scope.$on('$destroy', function() {
      $interval.cancel(vm.timeout);
    });

    activate();

    function activate(){
      vm.timeout = $interval(function () {
        $http.get('../../api/issues.csv').then(function(resp){
          vm.labels = [];
          vm.data[0] = [];
          vm.open_issues = Math.floor((Math.random() * 1000) + 1);
          vm.higher = Math.floor((Math.random() * 100) + 1);
          var lines = resp.data.split("\n");
          var labels = lines[0].split(",");
          var data = lines[1].split(",");

          for (var i = 0; i < labels.length; i++) {
            vm.labels.push(labels[i]);
          }

          for (var i = 0; i < data.length; i++) {
            var random = Math.floor((Math.random() * parseInt(data[i],10)) + 1);

            vm.data[0].push(parseInt(data[i],10) + random);
          }
        });

      }, 2000);
    }



  }]);
})();
