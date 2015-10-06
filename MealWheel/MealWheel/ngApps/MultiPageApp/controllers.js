var MultiPageApp;
(function (MultiPageApp) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController() {
                this.message = 'Login page';
            }
            return LoginController;
        })();
        angular.module('MultiPageApp').controller('LoginController', LoginController);
        var SearchController = (function () {
            function SearchController() {
                this.message = '';
            }
            return SearchController;
        })();
        angular.module('MultiPageApp').controller('SearchController', SearchController);
    })(Controllers = MultiPageApp.Controllers || (MultiPageApp.Controllers = {}));
})(MultiPageApp || (MultiPageApp = {}));
//# sourceMappingURL=controllers.js.map