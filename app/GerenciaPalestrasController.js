angular.module("GerenciaPalestras").controller("GerenciaPalestrasController", function($scope, PalestraService) {
		$scope.titulo = "Gerenciamento de Palestras"

		$scope.palestras = PalestraService.getPalestras();
		
		$scope.adicionarPalestra = function(palestra) {
			$scope.palestras.push(palestra);
			delete $scope.palestra;
		}
		
		$scope.temPalestraSelecionada = function() {
			return $scope.palestras.some(function (palestra){
				return palestra.selecionada;
			});
		}
	});