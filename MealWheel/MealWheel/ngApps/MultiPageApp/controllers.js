var MultiPageApp;
(function (MultiPageApp) {
    var Controllers;
    (function (Controllers) {
        var foodTruckURL = '../../JSON/trucks.json';
        var FrontFeatureController = (function () {
            function FrontFeatureController($resource) {
                this.$resource = $resource;
                var FoodTruckResource = $resource(foodTruckURL);
                this.trucks = FoodTruckResource.query(function (data) {
                    //reduces array to only 12 featured trucks
                    if (data.length > 12) {
                        data.length = 12;
                    }
                });
            }
            return FrontFeatureController;
        })();
        angular.module('MultiPageApp').controller('FrontFeatureController', FrontFeatureController);
        var TruckProfileController = (function () {
            function TruckProfileController($routeParams, $resource, $location) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.truckResource = $resource(foodTruckURL);
                this.truckResource.query().$promise.then(function (data) {
                    _this.requestedTruck = data.filter(function (value) {
                        return value.name == $routeParams['name'];
                    })[0];
                });
            }
            return TruckProfileController;
        })();
        angular.module('MultiPageApp').controller('TruckProfileController', TruckProfileController);
        var SearchController = (function () {
            function SearchController() {
                this.message = 'find a food truck';
            }
            return SearchController;
        })();
        angular.module('MultiPageApp').controller('SearchController', SearchController);
    })(Controllers = MultiPageApp.Controllers || (MultiPageApp.Controllers = {}));
})(MultiPageApp || (MultiPageApp = {}));
