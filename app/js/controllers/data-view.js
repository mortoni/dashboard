'use strict';

/* Controllers */

angular.module('app')
    .controller('DataCtrl', ['$scope','$state', 'issuesSrv', function($scope, $state, issuesSrv) {
      var vm = this;

      // var table = $('#tableWithSearch');
      vm.issues = issuesSrv.get();

      if(typeof vm.issues.length === 'undefined')
        $state.go('app.dashboard');


      // vm.options = {
      //     "sDom": "<'table-responsive't><'row'<p i>>",
      //
      //     "destroy": true,
      //     "scrollCollapse": true,
      //     "oLanguage": {
      //         "sLengthMenu": "_MENU_ ",
      //         "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"
      //     },
      //     "iDisplayLength": 5
      // };
      //
      // vm.filter = function(event) {
      //     table.dataTable().fnFilter($(event.currentTarget).val());
      // }

    }]);
