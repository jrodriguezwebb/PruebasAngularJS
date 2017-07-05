angular.module('filtros',[])
	.controller('FiltrosController', function($scope){
		$scope.hoy = new Date();
		$scope.personas = [	{'nombre':'Carlos','nacionalidad':'Colombiano'},
							{'nombre':'Jorge','nacionalidad':'Mexicano'},
							{'nombre':'Camilo','nacionalidad':'Colombiano'}];
		
	})
	.filter('suspensivos',function(){
		return function(palabra){
			return palabra+ '...';
		}
	})