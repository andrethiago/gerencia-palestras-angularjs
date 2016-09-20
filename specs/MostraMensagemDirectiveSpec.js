describe("MostaMensagemDirective", function() {
	
	it("Deve compilar corretamente a diretiva", function() {
		
		var scope, diretiva;
		var mensagem = 'Operação realizada com sucesso!';
		
		angular.mock.module("GerenciaPalestras");
		
		angular.mock.inject(function($compile, $rootScope){
			scope = $rootScope.$new();
			
			diretiva = $compile("<div mostra-mensagem tipo=\"'success'\" mensagem=\"'"+ mensagem +"'\"></div>")(scope);
			scope.$digest();
		});
		
		var resultadoEsperado = "<div class=\"alert alert-success\">"+ mensagem +"</div>"
		
		expect(diretiva.html()).toBe(resultadoEsperado);
		expect(diretiva.text()).toEqual(mensagem);
		
	});
	
});