/* Directives */
etlApp.directive('etlVisualization', function () {
	// constants
	var width = 960,
	height = 500;
	var color = d3.scale.category20();

	return {
		restrict: 'E',
		scope: {
			flow: '='
		}, 
		link: function ( scope, element, attrs ) {
			// set up initial svg object
			var svg = d3.select(element[0])
				.append("svg")
				.attr("width", width)
				.attr("height", height);

			scope.$watch( 'flow.timestamp', function ( newVal, oldVal ) {
				// clear the elements inside the directive
				console.log("newVal is: ");
				console.log(newVal);

				console.log("oldVal is: ");
				console.log(oldVal);

				console.log(scope.flow);

				if ( !newVal ) {
					console.log("timestamp newVal is undefined. Returning.");
					return;
				} 
				if ( oldVal ) {
					console.log("timestamp oldVal is defined...");
					if( newVal == oldVal ) {
						console.log("timestamps match. Returning.");
						return;
					}
				} 

				// if 'flow' is uninitialized, then exit
				if(true) {
					var nodes = scope.flow.nodes,
						links = scope.flow.links;

					var force = d3.layout.force()
						.charge(-120)
						.linkDistance(30)
						.size([width, height])
						.nodes(nodes)
						.links(links)
						.start();
						var link = svg.selectAll(".link")
						.data(links)
						.enter().append("line")
						.attr("class", "link")
						.style("stroke-width", function(d) {return Math.sqrt(d.value); });

					var node = svg.selectAll(".node")
						.data(nodes)
						.enter().append("circle")
						.attr("class", "node")
						.attr("r", 5)
						.style("fill", function(d) {return color(d.group); })
						.call(force.drag);

					node.append("title")
						.text(function(d) {return d.name; });

					force.on("tick", function() {
						link.attr("x1", function(d) { return d.source.x; })
							.attr("y1", function(d) { return d.source.y; })
							.attr("x2", function(d) { return d.target.x; })
							.attr("y2", function(d) { return d.target.y; });

						node.attr("cx", function(d) { return d.x; })
							.attr("cy", function(d) { return d.y; });
					});

				}
			}, true); // set objectEquality to true in order to watch for changes in value, rather than reference.
		}
	};
});