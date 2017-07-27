(function(){

    var app = angular.module("bne-portal", ["ngRoute"]);
    console.log(' ... BNE Module ... ');

    app.config(function($routeProvider, $locationProvider) {

		console.log(' ... Route Provider ... ');

	    $routeProvider
	        .when("/main", {
				templateUrl: "views/main.html",
				controller: "mainCtrl" })
			.otherwise({redirectTo:"/main"});

	    $locationProvider.hashPrefix('');

	});


}());
