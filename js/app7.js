angular.module('enrutamiento',['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'paginas/inicio.html',
			controller: 'MainController'
		})
		.when('/contactenos',{
			templateUrl: 'paginas/contactenos.html',
			controller: 'ContactenosController'
		})
		.when('/nosotros',{
			templateUrl: 'paginas/nosotros.html',
			controller: 'NosotrosController'
		})
		.otherwise({
			redirectTo: '/'
		})

		$locationProvider.html5Mode(true);
	})
	.controller('MainController', function($scope){
		$scope.texto = "Esta es la pagina principal";
	})
	.controller('ContactenosController', function($scope){
		$scope.texto = "Por favor escribanos a : xxx@sadasdsad.com";
	})
	.controller('NosotrosController', function($scope){
		$scope.texto = "Somos una empresa bla bla bla";
	})