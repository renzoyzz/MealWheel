namespace MultiPageApp {
    angular.module('MultiPageApp', ['ngRoute','ngResource']).config(
        (
            $routeProvider: ng.route.IRouteProvider,
            $locationProvider: ng.ILocationProvider
        ) => {
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
}