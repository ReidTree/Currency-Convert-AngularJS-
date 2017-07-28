var app = angular.module('mod');

app.config(function($routeProvider) {
  $routeProvider
    .when('/output', {
      controller: 'ctrl2',
      templateUrl: 'partials/output.html'
    })
    .otherwise({ redirectTo: '/home' })

});
