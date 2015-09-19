var app = angular.module('swapi');

// app.controller('mainCtrl', function($scope, mainService){
app.controller('mainCtrl', function($scope, $http, $q){
	$scope.response = 'Here is a RAW JSON dump.  I Hope this works without me needing to write parsing code, looping and making it look pretty';



	$scope.getShips = function(){
		$http.get('http://swapi.co/api/starships/').
			then(function(response){
				$scope.ships = response.data;
			}, function(error){
				console.log(error);
			});
	}


	$scope.getShips();

});