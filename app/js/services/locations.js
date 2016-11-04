(function () {
    'use strict';

    angular.module('app').factory('locations', [ '$firebaseArray', '$http',
    function($firebaseArray, $http){
      var ref = firebase.database().ref().child("locations");

      function get(){
        return $firebaseArray(ref);
      }

      return {
        get   : get
      };

    }]);
})();
