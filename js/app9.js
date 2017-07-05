angular.module('ContactosModule',[])
	.service('ContactosService',function(){
		var numContactos = 1;

		var contactos = [{
			id:0,
			nombre: 'Gabriel Garcia',
			correo: 'gabriel@garcia.com',
			telefono: '123456789'
		}];

		this.obtenerContactos = function(){
			return contactos;
		}

		this.guardar = function(contacto){
			if(contacto.id == null){
				contacto.id = numContactos;
				numContactos++;
				contactos.push(contacto);
			}
			else
			{
				for(i in contactos){
					if(contactos[i].id == contacto.id){
						contactos[i] = contacto;
					}
				}
			}
			
		}

		this.borrar = function(id){
			for(i in contactos){
				if(contactos[i].id == id){
					contactos.splice(i,1);
				}
			}
		}

		this.obtenerContacto = function(id){
			for(i in contactos){
				if(contactos[i].id == id){
					return contactos[i];
				}
			}
		}
	})
	.controller('ContactosController',function($scope,ContactosService){
		$scope.contactos = ContactosService.obtenerContactos();
		//console.log($scope.contactos);

		$scope.GuardarContacto = function(){
			ContactosService.guardar($scope.nuevoContacto);
			$scope.nuevoContacto = {};
		}

		$scope.BorrarContacto = function(id){
			ContactosService.borrar(id);
		}

		$scope.EditarContacto = function(id){
			$scope.nuevoContacto = angular.copy(ContactosService.obtenerContacto(id));
		}
	})