namespace MultiPageApp.Controllers {

    class LoginController {
        message = 'Login page'
    }

    angular.module('MultiPageApp').controller('LoginController', LoginController);

    class SearchController {
        message = ''
    }

    angular.module('MultiPageApp').controller('SearchController', SearchController);
}