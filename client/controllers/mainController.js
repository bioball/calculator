angular.module('calculator')
.controller('mainController', function($scope){

  $scope.queryStr = '';

  var stack = [];

  var shouldClear = false;

  var currentNum;

  var add = function(a, b){
    return a + b;
  };

  var subtract = function(a, b){
    return a - b;
  };

  var multiply = function(a, b){
    return a * b;
  };

  var divide = function(a, b){
    return a / b;
  };

  var calculate = function(){
    var result = getNum()
    while(stack.length){
      result = stack.pop()(result);
    }
    $scope.queryStr = result.toString();
  };

  var getNum = function(){
    return parseFloat($scope.queryStr);
  };

  $scope.add = function(){
    stack.length && calculate(getNum());
    stack.push(add.bind(null, getNum()));
    shouldClear = true;
  };

  $scope.subtract = function(){
    stack.length && calculate(getNum());
    stack.push(subtract.bind(null, getNum()));
    shouldClear = true;
  };

  $scope.multiply = function(){
    stack.push(multiply.bind(null, getNum()));
    shouldClear = true;
  };

  $scope.divide = function(){
    stack.push(divide.bind(null, getNum()));
    shouldClear = true;
  };

  $scope.addDigit = function(number){
    $scope.queryStr = shouldClear ? number.toString() : $scope.queryStr + number;
    shouldClear = false;
  };

  $scope.calculate = calculate;

});