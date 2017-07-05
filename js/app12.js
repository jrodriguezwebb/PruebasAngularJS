angular.module('miModulo',[])
	.controller('WindowController',function($scope,$window){
		$scope.mostrarAlerta = function(mensaje){
			$window.alert(mensaje);
		}

		$scope.mostrarPrompt = function(){
			var nombre = $window.prompt('Cual es tu nombre?');

			$window.alert('Hola ' + nombre);
		}

	})