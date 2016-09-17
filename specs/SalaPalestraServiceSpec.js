describe("SalaPalestraService", function() {

	var palestras = [ {
		"id" : 1,
		"nome" : "Palestra 01",
		"autor" : "Autor 01",
		"sala" : "Sala Vênus",
		"dataHora" : new Date("2016-10-01 14:30")
	}, {
		"id" : 2,
		"nome" : "Palestra 02",
		"autor" : "Autor 02",
		"sala" : "Sala Júpiter",
		"dataHora" : new Date("2016-10-01 14:30")
	}, {
		"id" : 3,
		"nome" : "Palestra 03",
		"autor" : "Autor 03",
		"sala" : "Sala Marte",
		"dataHora" : new Date("2016-10-01 14:30")
	}, {
		"id" : 4,
		"nome" : "Palestra 04",
		"autor" : "Autor 04",
		"sala" : "Sala Mercúrio",
		"dataHora" : new Date("2016-10-01 14:30")
	}];
	
	var salaPalestraService, palestraService;
	
	beforeEach(function() {
		
		angular.mock.module("GerenciaPalestras");

		// injeção de serviços mocks
		angular.mock.inject(function(SalaPalestraService, PalestraService) {
			salaPalestraService = SalaPalestraService;
			palestraService = PalestraService;
			
			// faz com que à chamada a getPalestras() retorna a lista de palestras definida aqui
			spyOn(palestraService, "getPalestras").and.callFake(function() {
				return palestras;
			});
		});

		
	});

	it("Deve ter sala disponível para a data/horário", function() {
		var sala = salaPalestraService.getSalaDisponivel(new Date("2016-10-01 15:30"));

		expect(sala).not.toBeNull();
		expect(sala).not.toBeUndefined();
	});

	it("Não deve ter sala disponível para a data/horário", function() {
		var sala = salaPalestraService.getSalaDisponivel(new Date("2016-10-01 14:30"));

		expect(sala).toBeNull();
	});

});