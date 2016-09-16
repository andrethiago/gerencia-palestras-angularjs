angular.module("GerenciaPalestras").factory("PalestraService", function() {
	
	var palestras = [ 
		{
			"id" : 1,
			"nome" : "Conhecendo Angular JS",
			"autor" : "André Thiago",
			"sala" : "Sala Vênus",
			"dataHora" : new Date("2016-10-01 14:30")
		}, 
		{
			"id" : 2,
			"nome" : "Apresentando Spring MVC",
			"autor" : "Roy Johnson",
			"sala" : "Sala Júpiter",
			"dataHora" : new Date("2016-10-01 14:30")
		}, 
		{
			"id" : 3,
			"nome" : "Mapeamento ORM com Hibernate",
			"autor" : "Gavin King",
			"sala" : "Sala Marte",
			"dataHora" : new Date("2016-10-01 14:30")
		}, 
		{
			"id" : 4,
			"nome" : "Modelando com base em DDD",
			"autor" : "Eric Evans",
			"sala" : "Sala Mercúrio",
			"dataHora" : new Date("2016-10-01 14:30")
		}, 
		{
			"id" : 5,
			"nome" : "Microservice Patterns",
			"autor" : "Martin Fowler",
			"sala" : "Sala Vênus",
			"dataHora" : new Date("2016-10-01 15:30")
		} 
	];
	
	return {
		
		getPalestras: function() {
			return palestras;
		}		
		
	};
	
});