var app = angular.module('mod');

app.controller('ctrl', function($scope, $location, pinFact) {

// $scope.test = pinFact.setJSON();
$scope.langArry = pinFact.arry;
console.log(pinFact.arry);
$scope.testBtn = (function(x, y, z) {
  console.log(y);
  pinFact.setJSON(x, y, z).then(function() {
      // $location.path('/output')
      $scope.out = pinFact.getJSON().data;
  })
});


});
