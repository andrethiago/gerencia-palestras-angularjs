angular.module("GerenciaPalestras").factory("SalaPalestraService", function(PalestraService) {
	
	var salas = [
         {"nome": "Sala Marte"},
         {"nome": "Sala Júpiter"},
         {"nome": "Sala Mercúrio"},
         {"nome": "Sala Vênus"},
	];
	
	return {
		
		getSalas: function() {
			return salas;
		},
		
		getSalaDisponivel : function(dataHoraPalestra) {
			var palestras = PalestraService.getPalestras();
			
			var salasDisponiveis = palestras.filter(function(palestra) {
				return palestra.dataHora == dataHoraPalestra;
			}).map(function(palestra) {
				return palestra.sala;
			});
			
			return salasDisponiveis[0];
			
		}
		
		
	};
	
	
});