angular.module('miModulo',[])
	.directive('miDirectiva',function(){
		return{
			restrict: 'E',
			replace: true,			
			template: '<h1>{{libroObjeto}}</h1>',
			scope: {
				libroObjeto: "=",
				enMayusculas: "&"
				
			}
		}
	})
	.controller('miController',function($scope){
		$scope.libro =  { 	autor: 'Gabriel Garcia Marquez',
							titulo: 'Cien anos de soledad',
							publicado: 1967
						}
		$scope.enMayusculas = function(libro){
			return libro.titulo.toUpperCase() + '' + libro.autor.toUpperCase();
		}
	})
	
	
	
	
			//templateUrl: 'directivas/miDirectiva.html',
			//
			//{{enMayusculas({libro:libroObjeto})}}
			
			
				//propiedad: "@" ---> para pasar una propiedad de tipo string