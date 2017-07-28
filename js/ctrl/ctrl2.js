var app = angular.module('mod');

app.controller('ctrl2', function($scope, $location, pinFact) {

$scope.out = pinFact.getJSON().data;
console.log(pinFact.getJSON().data);

});
