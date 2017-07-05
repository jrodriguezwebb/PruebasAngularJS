angular.module('miModulo',[])
	.controller('IntervalController',function($scope,$interval, $timeout){
		$scope.contador = 0;
		$scope.incrementarContador = function(){
			$scope.contador +=1;
		}

		$scope.saludar = function(){
			console.log("Hola mundo")
		}

		//cuenta
		$interval($scope.incrementarContador, 1000, 5);
		//ejecuta al llegar a ese tiempo
		$timeout($scope.saludar, 5000);
	})