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
                    controller: 'DashboardCtrl',
                    controllerAs: 'vm'
                })
                .state('app.data', {
                    url: '/data',
                    templateUrl: 'views/data-view.html',
                    controller: 'DataCtrl',
                    controllerAs: 'vm'
                })
                .state('app.metrics', {
                    url: '/metrics',
                    templateUrl: 'views/key-metrics.html',
                    controller: 'MetricsCtrl',
                    controllerAs: 'vm'
                });
        }
    ]);
})();
