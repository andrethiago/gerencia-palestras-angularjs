angular.module("GerenciaPalestras").controller("GerenciaPalestrasController", function($scope, PalestraService) {
		$scope.titulo = "Gerenciamento de Palestras"

		$scope.palestras = PalestraService.getPalestras();
		
		$scope.adicionarPalestra = function(palestra) {
			palestra.id = $scope.palestras.length + 1;
			$scope.palestras.push(palestra);
			$scope.mensagemSucesso = "Palestra incluída com sucesso!";
			delete $scope.palestra;
		}
		
		$scope.temPalestraSelecionada = function() {
			return $scope.palestras.some(function (palestra){
				return palestra.selecionada;
			});
		}

		$scope.apagarPalestras = function() {
			var palestras = $scope.palestras.filter(function(palestra) {
				return !palestra.selecionada;
			});
			$scope.palestras = palestras;
			$scope.mensagemSucesso = "Palestras removidas com sucesso!";
		} 
		
		
});