namespace MultiPageApp.Controllers {

    class LoginController {
        message = 'Login page'
    }

    angular.module('MultiPageApp').controller('LoginController', LoginController);

    class SearchController {
        message = 'find a food truck'
    }

    angular.module('MultiPageApp').controller('SearchController', SearchController);
}