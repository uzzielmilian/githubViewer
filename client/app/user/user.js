'use strict';

angular.module('githubviewerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/:id',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });