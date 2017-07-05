angular.module('UsuariosModule',[])
	.controller('UsuariosController',function($scope,$http){
		$http.get('https://jsonplaceholder.typicode.com/users')
			.then(function(respuesta){
				$scope.usuarios = respuesta.data;
			})
	})