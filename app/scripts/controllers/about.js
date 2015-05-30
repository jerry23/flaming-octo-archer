'use strict';

/**
 * @ngdoc function
 * @name flamingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flamingApp
 */
angular.module('flamingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
