(function () {
    'use strict';

    angular.module('app').factory('issuesSrv', function(){
      var issues = [];
      var data = {};

      function load(){
        firebase.database().ref('issues/').on('value', function(snapshot) {
          var iss = snapshot.val();

          for (var i = 0; i < iss.length; i++) {
            issues.push(iss[i]);
          }
        });

        firebase.database().ref('data/').on('value', function(snapshot) {
          data = snapshot.val();
        });


      }

      function get(){
        return issues;
      }

      function map(){
        return data;
      }

      return {
        load  : load,
        get   : get,
        map   : map

      };
    });
})();
