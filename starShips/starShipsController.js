var app = angular.module('swapi');

app.controller('starShipsController', function($scope, $http){
	console.log('in the starShips Controller');
	$scope.response = 'Here is a slightly parsed and formatted list of Starships in StarWars';

	$scope.getShips = function(){
		$http.get('http://swapi.co/api/starships/')
			.then(function(response){
				$scope.ships = response.data.results;
				console.log($scope.ships);
			}, function(error){
				console.log(error);
			});
	}


	$scope.getShips();

})