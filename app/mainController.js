/*
app.controller('MainController', ['$scope', function($scope) {
	$scope.data = [
		{
			"name":"Willow Falls",
			"address":"x"
		},
		{
			"name":"Cyprus Run"
		}
	];
}]);
*/

/*
function MainCtrl($scope, $filter) {
	this.properties = [
		{
			"name":"ASHLAND VILLAGE",
			"address":"1517 COTTAGE STREET, ASHLAND, OH 44805"
		},
		{
			"name":"OAKLEAF VILLAGE OF COLUMBUS",
			"address":"5500 KARL ROAD, COLUMBUS, OH 43229"
		},
		{
			"name":"OAKLEAF VILLAGE OF TOLEDO",
			"address":"4220 N. HOLLAND SYLVANIA RD, TOLEDO, OH 43623"
		}
	]

	$scope.filterTerm = "";

};

app.controller('MainController', MainCtrl);
*/

app.controller('MainController', function($scope) {
	$scope.properties = [
		{
			"name":"ASHLAND VILLAGE",
			"address":"1517 COTTAGE STREET, ASHLAND, OH 44805",
			"founded": 2015
		},
		{
			"name":"OAKLEAF VILLAGE OF COLUMBUS",
			"address":"5500 KARL ROAD, COLUMBUS, OH 43229",
			"founded": 2002
		},
		{
			"name":"OAKLEAF VILLAGE OF TOLEDO",
			"address":"4220 N. HOLLAND SYLVANIA RD, TOLEDO, OH 43623",
			"founded": 2014
		},
		{
			"name":"HYATT BUILDING",
			"address":"110 HIGH ST, COLUMBUS OH 43044 ",
			"founded": 2005
		}
	]

	$scope.filterTerm = '';

	// make sure this value is a key in the values above
	$scope.orderProp = 'name';

})