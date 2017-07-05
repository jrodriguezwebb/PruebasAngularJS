angular.module('miModulo',["ngStorage"])
	.controller('miController',function($scope,$localStorage,$sessionStorage){
		$scope.grabar = function(){
			$localStorage.texto = $scope.texto;
			$sessionStorage.texto = $scope.texto;
		}

		$scope.cargar = function(){
			$scope.texto = $localStorage.texto;
			$scope.texto = $sessionStorage.texto;
		}

	})