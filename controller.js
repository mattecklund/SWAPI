var app = angular.module('swapi');

// app.controller('mainCtrl', function($scope, mainService){
app.controller('mainCtrl', function($scope, $http, $q){
	$scope.response = 'Here is a slightly parsed and formatted list of Starships in StarWars';



	$scope.getShips = function(){
		$http.get('http://swapi.co/api/starships/').
			then(function(response){
				$scope.ships = response.data.results;
			}, function(error){
				console.log(error);
			});
	}


	$scope.getShips();

});