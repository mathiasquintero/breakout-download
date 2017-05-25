var app = angular.module('tutor', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/post/:id', {
        templateUrl: 'download.html',
        controller: 'DownloadCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
