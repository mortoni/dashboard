(function(){
    'use strict';
    angular.module('app').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/app/dashboard');
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: "/app",
                    templateUrl: "views/app.html"
                })
                .state('app.dashboard', {
                    url: "/dashboard",
                    templateUrl: "views/dashboard.html",
                    controller: 'DashboardCtrl'
                })
                .state('app.data', {
                    url: '/data',
                    templateUrl: 'viewss/data-view.html',
                    controller: 'DataCtrl',
                    controllerAs: 'vm'
                });
        }
    ]);
})();
