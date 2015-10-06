var MultiPageApp;
(function (MultiPageApp) {
    angular.module('MultiPageApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
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
})(MultiPageApp || (MultiPageApp = {}));
//# sourceMappingURL=app.js.map