'use strict';

/**
 * @ngdoc function
 * @name flamingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flamingApp
 */
angular.module('flamingApp')
  .controller('MainCtrl',[ '$scope', 'MainService', '$location', function ($scope, MainService, $location) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    // console.log($scope)
    

    console.log($location)

      $scope.$on('$viewContentLoaded', function(){

      	//console.log('load', $scope.myform )

      });


      $scope.searchTag = function(){

      	var tag = $scope.search;

        MainService.getImages( tag ).success( function(data) {
          var obj = angular.fromJson(eval('(' + data + ')'));

          $scope.Images = obj.items;

          console.log(  $scope.Images);
        });

      };

	  // $scope.fetchImages = function() {

	  //   MainService.getImages().success( function(data) {
	  //     var obj = angular.fromJson(eval('(' + data + ')'));

	  //     $scope.Images = obj.items;

	  //     console.log(  $scope.Images);
	  //   });
	  // };


  }] );



/**
 * @ngdoc function
 * @name flamingApp.service:MainService
 * @description
 * # MainService
 * Service of the flamingApp
 */


angular.module('flamingApp')
.service('MainService', ['$http', function($http) {


  var flickerAPI ='http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  return {

    getImages: function( tag ) {
      return $http.get(flickerAPI + '&tags=' + tag + '&tagmode=any&format=json' );
    }

  };

}]);

angular.module('flamingApp')
.filter('capitalize', function() {

  // Create the return function and set the required parameter as well as an optional paramater
  return function(input, char) {

    console.log( input )

    if (isNaN(input)) {

      // If the input data is not a number, perform the operations to capitalize the correct letter.
      var char = char - 1 || 0;
      var letter = input.charAt(char).toUpperCase();
      var out = [];

      for (var i = 0; i < input.length; i++) {

        if (i == char) {
          out.push(letter);
        } else {
          out.push(input[i]);
        }
        
      }

      return out.join('');

    } else {
      return input;
    }

  }

});


angular.module('flamingApp')
.filter('lowercase', function() {

  // Create the return function and set the required parameter as well as an optional paramater
  return function(input) {

    console.log(input)
      return input.toLowerCase();
  }

});