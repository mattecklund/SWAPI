var app = angular.module('swapi', ['ngRoute']);

app.config(function($routeProvider){
	console.log('in the router');
	$routeProvider
		.when('/starShips', {
			templateUrl: 'starShips/starShips.html',
			controller: 'starShipsController'
			// resolve: {
			// 	ships: function(){
			// 		console.log('In the router');
			// 	}	
			// }
		})

		.when('/starShips/:starShip', {
			templateUrl: 'starShips/ship.html',
			controller: 'starShipsController',
			resolve: {
				ship: function($route, starShipService){
					return starShipService.getShip($route.current.params.starShip)
				}
			}
		})

		

		.otherwise({
			redirectTo: '/starShips'
		})
})