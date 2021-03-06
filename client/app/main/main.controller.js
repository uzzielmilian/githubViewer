/*'use strict';

angular.module('githubviewerApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
*/

/*(function(){

	var app = angular.module("githubviewerApp");

	var MainCtrl = function($scope. github, $routeParams) {

		var onUsersComplete = function(data) {
			$scope.users = data;
		}
	}
}());*/

'use strict';

angular.module('githubviewerApp')
  .controller('MainCtrl', function ($scope, $http, github) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    github.getUsers()
    	.then(function(data) {
    		$scope.users = data;
    		

    	},
    		function(error) {
    			alert("Could not fetch the data");
    		}
    	);

  });