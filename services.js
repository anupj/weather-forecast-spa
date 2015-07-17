// Services
weatherApp.service('cityService', function() {
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    // do a callout to the OpenWeatherAPI to get weather data in json format
    // find out more about why we are using JSONP here
    this.getWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, {get: {method: "JSONP"}});
        return weatherAPI.get({q: city, cnt: days});
    };
    
    
}]);