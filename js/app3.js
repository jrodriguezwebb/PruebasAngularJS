angular.module('miModulo',[])
	.directive('miDirectiva',function(){
		return{
			restrict: 'AECM',
			replace: true,			
			templateUrl: 'directivas/miDirectiva.html'
			/*template: '<h1>Directiva  personalizada en angularJS</h1>'*/
		}
	})
	