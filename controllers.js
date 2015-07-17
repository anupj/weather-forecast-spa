// Controllers

weatherApp.controller('homeController' , ['$scope', '$log', '$location', 'cityService', function($scope, $log, $location, cityService) {
    $log.info('inside homeController');
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
    $scope.submit = function() {
      $location.path("/forecast");  
    };
    
}]);


weatherApp.controller('forecastController' , ['$scope', '$log', '$routeParams', 'cityService', 'weatherService', function($scope, $log, $routeParams, cityService, weatherService) {
    $log.info('inside forecastController');
    // create a new variable on the scope to store the city name
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
    
    // convert to fahrenheit
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32 );
    };
    
    // format date
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };
}]);