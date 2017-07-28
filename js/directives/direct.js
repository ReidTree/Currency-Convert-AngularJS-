var app = angular.module('mod');

app.directive('langRpt', function() {

  return {
    restrict: 'E',
    template: '<option ng-repeat="a in langArry" value="a">{{a}}</option>'
  };

});
