angular.module('calculator')
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'client/views/calculator.html',
    controller: 'mainController'
  });
})