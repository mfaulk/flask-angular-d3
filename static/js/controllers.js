/* Controllers */

var etlControllers = angular.module('etlControllers', []);

etlControllers.controller('workspaceCtrl', ['$scope', '$http', '$q', 
  function($scope, $http, $q) {
   	$scope.flow = {};

  	var links = $http.get('../static/flows/flow-links-small.json'),
  		nodes = $http.get('../static/flows/flow-nodes-small.json');
  	$q.all([links,nodes]).then( function(arrayOfResults) {
  		console.log('q');
  		// TODO: perform error handling

  		$scope.flow.links = arrayOfResults[0].data.links;
  		$scope.flow.nodes = arrayOfResults[1].data.nodes;
  		$scope.flow.timestamp = Date.now();
  		console.log("Controller has " + Object.getOwnPropertyNames($scope.flow).length);
  		console.log("Controller has " + $scope.flow.links.length + " links.");
  		console.log("Controller has " + $scope.flow.nodes.length + " nodes.");
  		console.log("at timestamp " + $scope.flow.timestamp);
  	});

  	// Data sources modal form
  	$scope.source = {"name" : ""};
  	$scope.reset = function() {
  		console.log("reset");
  		$scope.source.name = "";
  	};
  	$scope.createSource = function(source) {
  		console.log("Creating new source...");

  		$scope.flow.nodes.push({"name":source.name, "group":2});
  		$scope.flow.timestamp = Date.now();

  	}
 }]);

etlControllers.controller('reportsCtrl', ['$scope', 
  function($scope, $routeParams) {
    // TODO
    $scope.name = "Reports";
  }]);
