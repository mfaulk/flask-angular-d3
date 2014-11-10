/* App Module */

var etlApp = angular.module('etlApp', [
  'ngRoute',
  'etlControllers',
]);

etlApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/reports', {
        templateUrl: '../partials/reports.html',
        controller: 'reportsCtrl'
      }).
      otherwise({
        templateUrl: '../static/partials/workspace.html',
        controller: 'workspaceCtrl'
      });
  }]);
