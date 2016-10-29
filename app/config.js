(function(){
     'use strict';
     angular.module('app').run(['issuesSrv', function(issuesSrv) {
       // Initialize Firebase
       var config = {
         apiKey: "AIzaSyDBCC2NgMZ4VlAAq8TN6n_TBvjW-FxwWEs",
         authDomain: "udacityfour.firebaseapp.com",
         databaseURL: "https://udacityfour.firebaseio.com",
         storageBucket: "udacityfour.appspot.com",
         messagingSenderId: "446731936107"
       };

       firebase.initializeApp(config);
       issuesSrv.load();
     }]);
})();
