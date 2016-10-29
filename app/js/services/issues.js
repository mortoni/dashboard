(function () {
    'use strict';

    angular.module('app').factory('issuesSrv', function(){
      var issues = {};

      function load(){
        firebase.database().ref('issues/').on('value', function(snapshot) {
          issues = snapshot.val();
        });
      }

      function get(){
        return issues;
      }

      return {
        load  : load,
        get   : get
      };
    });
})();
