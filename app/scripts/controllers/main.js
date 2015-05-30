'use strict';

/**
 * @ngdoc function
 * @name flamingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flamingApp
 */
angular.module('flamingApp')
  .controller('MainCtrl',[ '$scope', 'MainService', function ($scope, MainService) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    // console.log($scope)

      $scope.$on('$viewContentLoaded', function(){

      	console.log('load', $scope.myform )

      });


      $scope.searchTag = function(){

      	console.log('searchtag', $scope.search)

      	var tag = $scope.search;

	    MainService.getImages( tag ).success( function(data) {
	      var obj = angular.fromJson(eval('(' + data + ')'));

	      $scope.Images = obj.items;

	      console.log(  $scope.Images);
	    });

      };

	  $scope.fetchImages = function() {

	    MainService.getImages().success( function(data) {
	      var obj = angular.fromJson(eval('(' + data + ')'));

	      $scope.Images = obj.items;

	      console.log(  $scope.Images);
	    });
	  };


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

      //return $http.get(flickerAPI + 'tags=dogs&tagmode=any&format=json');
      return $http.get(flickerAPI + '&tags=' + tag + '&tagmode=any&format=json' );
    }

  };

}]);