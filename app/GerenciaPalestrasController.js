angular.module("GerenciaPalestras").controller("GerenciaPalestrasController", function($scope) {
		$scope.titulo = "Gerenciamento de Palestras"

		$scope.palestras = [ 
			{
				"id" : 1,
				"nome" : "Conhecendo Angular JS",
				"autor" : "André Thiago"
			}, 
			{
				"id" : 2,
				"nome" : "Apresentando Spring MVC",
				"autor" : "Roy Johnson"
			}, 
			{
				"id" : 3,
				"nome" : "Mapeamento ORM com Hibernate",
				"autor" : "Gavin King"
			}, 
			{
				"id" : 4,
				"nome" : "Modelando com base em DDD",
				"autor" : "Eric Evans"
			}, 
			{
				"id" : 5,
				"nome" : "Microservice Patterns",
				"autor" : "Martin Fowler"
			} 
		];
		
		$scope.adicionarPalestra = function(palestra) {
			$scope.palestras.push(palestra);
			delete $scope.palestra;
		}
		
		$scope.temPalestraSelecionada = function(palestras) {
			return $scope.palestras.some(function (palestra){
				return palestra.selecionada;
			});
		}
	});