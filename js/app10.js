angular.module('miModulo',[])
	.controller('LogController',function($scope,$log){
		$log.log('Este es un mensaje de LOG');
		$log.error('Este es un mensaje de ERROR');
		$log.warn('Este es un mensaje de WARNING');
		$log.info('Este es un mensaje de INFORMACION');
		$log.debug('Este es un mensaje de DEBUG');
	})