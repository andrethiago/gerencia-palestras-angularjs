describe("MostaMensagemDirective", function() {
	
	it("Deve atribuir corretamente o tipo de alerta e o valor da mensagem", function() {
		
		var scope, diretiva;
		var mensagem = 'Operação realizada com sucesso!';
		
		angular.mock.module("GerenciaPalestras");
		
		angular.mock.inject(function($compile, $rootScope){
			scope = $rootScope.$new();
			
			var elemento = angular.element(
					"<div mostra-mensagem tipo=\"'success'\" mensagem=\"'"+ mensagem +"'\"></div>");
			diretiva = $compile(elemento)(scope);
			scope.$digest();
		});
		
		var resultadoEsperado = "<div class=\"alert alert-success\">"+ mensagem +"</div>"
		
		expect(diretiva.html()).toBe(resultadoEsperado);
		expect(diretiva.text()).toEqual(mensagem);
		
	});
	
});