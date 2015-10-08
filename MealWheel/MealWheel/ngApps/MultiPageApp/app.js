var MultiPageApp;
(function (MultiPageApp) {
    angular.module('MultiPageApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApps/MultiPageApp/index.html',
            controller: 'FrontFeatureController as vm',
        })
            .when('/index', {
            templateUrl: '/ngApps/MultiPageApp/index.html',
            controller: 'FrontFeatureController as vm'
        })
            .when('/truck/:name', {
            templateUrl: '/ngApps/MultiPageApp/truckProfile.html',
            controller: 'TruckProfileController as vm'
        })
            .when('/search', {
            templateUrl: '/ngApps/MultiPageApp/search.html',
            controller: 'SearchController as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MultiPageApp || (MultiPageApp = {}));
