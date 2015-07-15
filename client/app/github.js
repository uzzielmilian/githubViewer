(function(){

	var github = function($http) {

		var getUsers = function(){
			return $http.get("https://api.github.com/users")
				.then(function(response){
					return response.data;
				});
		};

		var getUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
				.then(function(response){
					return response.data;
				});
		};

		var getFollowers = function(user) {
			return $http.get(user.followers_url)
				.then(function(response) {
					return response.data;
				});
		};

		var getRepos = function(user) {
			return $http.get(user.repos_url)
				.then(function(response){
					return response.data;
				});
		};

		var getRepoDetails = function(username, reponame){
			var repo;
			var repoUrl = "http://api.github.com/repos/" + username + "/" + reponame;

			return $http.get(repoUrl)
						.then(function(response) {
							repo = response.data;
							return $http.get(repoUrl + "/collaborators");
						})
						.then(function(response) {
							repo.collaborators = response.data;
							return repo;
						});
		};

		return {
			getUsers: getUsers,
			getUser: getUser,
			getFollowers: getFollowers,
			getRepos: getRepos,
			getRepoDetails: getRepoDetails
		};
	};

	var module = angular.module("githubviewerApp");
	module.factory("github", github);
}());

/*'use strict';

angular.module('githubviewerApp')
	.factory('github', ['$q', '$http',
		function($q, $http) {
			var service = {
				getUsers: function(){
					var d = $q.defer();
						$http({
							method: 'GET',
							url: 'https://api.github.com/users'
						}).success(function(data) {
							console.log(data);
							d.resolve(data);
						}).error(function(reason) {
							console.log(data);
							d.reject(reason);
						});
						return d.promise;	
				},

				getUser: function(username){
					var d = $q.defer();
						$http({
							method: 'GET',
							url: 'https://api.github.com/users' + username
						}).success(function(data) {
							console.log(data);
							d.resolve(data);
						}).error(function(reason) {
							console.log(data);
							d.reject(reason);
						});
						return d.promise;
			},

				getFollowers: function(username){
					var d = $q.defer();
						$http.success(function(data) {
							console.log(data);
							d.resolve(data);
						}).error(function(reason) {
							console.log(data);
							d.reject(reason);
						});
						return d.promise;
			},

				getNumRepos: function(username){
					var d = $q.defer();
						$http({
							method: 'GET',
							url: 'https://api.github.com/users' + username + 'repos'
						}).success(function(data) {
							console.log(data);
							d.resolve(data);
						}).error(function(reason) {
							console.log(data);
							d.reject(reason);
						});
						return d.promise;
			}
		};
			return service;
		}

])*/