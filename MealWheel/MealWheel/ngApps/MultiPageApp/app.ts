namespace MultiPageApp {
    angular.module('MultiPageApp', ['ngRoute']).config(
        (
            $routeProvider: ng.route.IRouteProvider,
            $locationProvider: ng.ILocationProvider
        ) => {
            $routeProvider
            .when('/', {
                templateUrl: '/ngApps/MultiPageApp/index.html',
                controller: 'LoginController as vm',
            })
            .when('/index', {
                templateUrl: '/ngApps/MultiPageApp/index.html',
                controller: 'LoginController as vm'
            })
            .when('/search', {
                templateUrl: '/ngApps/MultiPageApp/search.html',
                controller: 'SearchController as vm'
            })
            .otherwise('/');

            $locationProvider.html5Mode(true);

        });
}