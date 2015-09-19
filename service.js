var app = angular.module('swapi');

app.service('mainService', function($http, $q){

this.getShips = function() {
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'http://swapi.co/api/starships/'
	}).then(function(response){
		response = response.data;
	deferred.resolve(response);
	})
	return deferred.promise;
};


//  NOTE I was getting errors with the service and just put the logic in the controller.
//  Lack of time meant I couldn't do it right.

});