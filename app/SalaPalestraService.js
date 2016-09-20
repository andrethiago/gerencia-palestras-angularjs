angular.module("GerenciaPalestras").factory("SalaPalestraService",function(PalestraService) {

	var salas = [ 
         "Sala Marte",
         "Sala Júpiter", 
         "Sala Mercúrio", 
         "Sala Vênus" 
    ];

	return {

		getSalas : function() {
			return salas;
		},

		getSalaDisponivel : function(dataHoraPalestra) {
			var palestras = PalestraService.getPalestras();

			var salasIndisponiveis = palestras.filter(function(palestra) {
				return palestra.dataHora.getTime() === dataHoraPalestra.getTime();
			}).map(function(palestra) {
				return palestra.sala;
			});
			
			if(salasIndisponiveis.length === salas.length) {
				return null;
			} 
			else {
				var salasDisponiveis = salas.filter(function(sala) {
					return salasIndisponiveis.indexOf(sala) < 0;
				});
				return salasDisponiveis[0];
			}
		}

	};

});