(function () {
    'use strict';

    angular.module('app').factory('issuesSrv', function(){
      var issues = [];

      function load(){
        firebase.database().ref('issues/').on('value', function(snapshot) {
          var iss = snapshot.val();

          for (var i = 0; i < iss.length; i++) {
            issues.push(iss[i]);
          }
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
