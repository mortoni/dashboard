(function () {
    'use strict';

    angular.module('app').factory('issuesSrv', [ '$firebaseArray', '$http',
    function($firebaseArray, $http){
      var ref = firebase.database().ref().child("issues");
    
      function get(){
        return $firebaseArray(ref);
      }

      return {
        get   : get
      };

    }]);
})();
