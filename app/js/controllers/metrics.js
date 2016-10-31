'use strict';

angular.module('app').controller('MetricsCtrl', ['$scope', '$http', function($scope, $http) {

    var vm = this;

    vm.labels = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'];
    vm.series = ['Reported Issues'];

    vm.data = [
      [28, 48, 40, 19, 86, 27, 90]
    ];

    vm.colors = ['#2b303b'];

    vm.labels1 = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'];
    vm.data1 = [
      [28, 48, 10, 29, 86, 27, 90]
    ];
    vm.datasetOverride = [
      {
        label: "paying customers",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];


}]);
