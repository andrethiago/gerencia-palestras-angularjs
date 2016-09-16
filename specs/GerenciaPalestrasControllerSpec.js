describe("GerenciaPalestrasController", function() {
	
	beforeEach(function(){
		angular.mock.module("GerenciaPalestras");
		
		var palestraService;
		
		// cria um PalestraService que é uma dependência do Controller
		angular.mock.inject(function(_PalestraService_) {
			palestraService = _PalestraService_;
		});
		
		angular.mock.inject(function($controller, $rootScope) {
			// cria o $scope
			$scope = $rootScope.$new();
			
			// injeta o $scope no nosso controller utilizando o decorator $controller
			$controller("GerenciaPalestrasController", {
				$scope : $scope,
				PalestraService : palestraService
			});
		});
	});
	
	it("O título da aplicação deve ser Gerenciamento de Palestras", function() {
		expect($scope.titulo).toBe("Gerenciamento de Palestras");
	});
	
	
	it("Não deve ter palestras selecionadas se nenhuma palestra tem o atributo 'selecionada' definido.", function() {
		expect($scope.temPalestraSelecionada()).toBe(false);
	});
	
	it("Não deve ter palestras selecionadas com todas tendo atributo selecionada = false.", function() {
		// coloca o atributo selecionada = false em todas as palestras
		angular.forEach($scope.palestras, function(palestra) {
			palestra.selecionada = false;
		});
		
				
		expect($scope.temPalestraSelecionada()).toBe(false);
	});
	
	it("Deve ter palestras selecionadas como true se pelo menos 1 palestra tiver atributo selecionada = true.", function() {
		// pego uma palestra qualquer e marco como true
		var indice = Math.floor(Math.random() * $scope.palestras.length);
		$scope.palestras[indice].selecionada = true;
		
				
		expect($scope.temPalestraSelecionada()).toBe(true);
	});
	
	it("A adição de palestras acresenta um novo elemento à lista de palestras.", function() {
		// pego uma palestra qualquer e marco como true
		var quantidadePalestras = $scope.palestras.length;
		var novaPalestra = {'nome' : 'Nova Palestra', 'autor': 'Nome do Autor'};
		$scope.adicionarPalestra(novaPalestra);
		
				
		expect($scope.palestras.length).toBe(quantidadePalestras + 1);
		expect(novaPalestra).toEqual($scope.palestras[$scope.palestras.length - 1]);
	});
	
});