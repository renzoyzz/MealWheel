﻿namespace MultiPageApp.Controllers {

    const foodTruckURL = '../../JSON/trucks.json';

    class FrontFeatureController {
        public trucks: any[];


        constructor(private $resource: ng.resource.IResourceService) {
            let FoodTruckResource = $resource(foodTruckURL);
            this.trucks = FoodTruckResource.query((data) => {
                //reduces array to only 12 featured trucks
                if (data.length > 12) { data.length = 12;}
                
            });
        }
    }

    angular.module('MultiPageApp').controller('FrontFeatureController', FrontFeatureController);

    class TruckProfileController {

        private truckResource
        public requestedTruck

        

        constructor(
            private $routeParams: ng.route.IRouteParamsService,
            $resource: ng.resource.IResourceService,
            private $location: ng.ILocationService
        ) {

            this.truckResource = $resource(foodTruckURL)
            this.truckResource.query().$promise.then((data) => {
                this.requestedTruck = data.filter((value) => {
                    return value.name == $routeParams['name'];
                })[0];
            });
        }
    }

    angular.module('MultiPageApp').controller('TruckProfileController', TruckProfileController);

    class SearchController {
        message = 'find a food truck'
    }

    angular.module('MultiPageApp').controller('SearchController', SearchController);
}